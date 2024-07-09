# 编写mt5脚本收集实时数据

- 这里需要用到三方库解析json
- 还有网络请求
- 以及转发程序

## Mt5脚本

```c++
//+------------------------------------------------------------------+
//|                                                      ProjectName |
//|                                      Copyright 2023, CompanyName |
//|                                       http://www.companyname.net |
//+------------------------------------------------------------------+
#include <JAson.mqh>

// 订阅的资产列表
string symbols[] = {{"EURUSD"},{"USDJPY"},{"GBPUSD"},{"AUDCAD"},{"CADJPY"},{"EURAUD"},{"USDCAD"},{"AUDJPY"},{"AUDCHF"},{"GBPAUD"},{"AUDUSD"},{"CADCHF"},{"EURGBP"},{"EURJPY"},{"GBPJPY"},{"NZDUSD"}};


// Socket句柄
int socket = INVALID_HANDLE;
// 指定Golang的IP地址和端口
string serverIP = "192.168.29.19";
int serverPort = 5555;

// 初始化订阅和Socket
void OnInit()
  {
// 订阅资产
   for(int i = 0; i < ArraySize(symbols); i++)
     {
      SymbolSelect(symbols[i], true);
     }

// 创建Socket
   socket = SocketCreate();
   Print("Socket: ", socket);

// 连接到Golang
   bool ok = SocketConnect(socket, serverIP, serverPort, 1000);
   Print("Connected to ", serverIP, ":", serverPort, " - ", ok);
  }

// 关闭Socket
void OnDeinit()
  {
   SocketClose(socket);
  }

// 在每个新tick时执行
void OnTick()
  {
   for(int i = 0; i < ArraySize(symbols); i++)
     {
      MqlTick tick;
      if(SymbolInfoTick(symbols[i], tick))
        {
         CJAVal json;
         json["name"] = symbols[i];
         json["bid"] = tick.bid;
         json["ask"] = tick.ask;
         json["flags"] = (int)tick.flags;
         json["last"] = tick.last;
         json["time"] = TimeToString(tick.time);
         json["timeMsc"] = tick.time_msc;
         json["volume"] = (double)tick.volume;
         json["volumeReal"] = tick.volume_real;
         string jsonString = json.Serialize();
         SendDataToGolang(jsonString);
        }
     }
  }

// 发送数据给Golang
void SendDataToGolang(string data)
  {
   if(socket != INVALID_HANDLE)
     {
      // 发送数据给Golang
      Print("Sending data: ", data);

      uchar myArray[];
      StringToCharArray(data, myArray, 0, -1, 0);
      int sentBytes = SocketSend(socket, myArray, StringLen(data));
      if(sentBytes == INVALID_HANDLE)
        {
         Print("Socket: ", socket);
         // 连接到Golang
         bool ok = SocketConnect(socket, serverIP, serverPort, 1000);
         Print("Connected to ", serverIP, ":", serverPort, " - ", ok);
        }
      else
        {
         Print("Sent bytes: ", sentBytes);
        }
     }
  }
```

## 使用说明

- 由于程序引用了三方库，这里我们需要引入一下 `JAson.mqh`

文件下载 [JAson](https://raw.githubusercontent.com/iszmxw/studys/main/markdown/static/JAson.mqh)

将该文件放到如图所示位置 -> `MQL5/Include/JAson.mqh`

![mt5脚本](https://images.54zm.com/images/studys/202407091654951.png)

- 准备编译 Mt5 脚本

![编译mt5脚本](https://images.54zm.com/images/studys/202407091656757.png)

- 编译好了后需要配置一下可以请求的外部地址，不然是无法进行网络通讯的

![配置白名单地址](https://images.54zm.com/images/studys/202407091700704.png)

- 打开选项配置

![配置地址](https://images.54zm.com/images/studys/202407091701013.png)


- 一切准备就绪后开始运行
  
![运行](https://images.54zm.com/images/studys/202407091703157.png)

- 看到下面的日志就表示正在转发到对应的ip和端口了
  
![转发数据](https://images.54zm.com/images/studys/202407091704386.png)

- 上面的连接显示 false 是由于我们没有在本地启动转发服务，我这里的转发服务是使用的go语言写的

我这里直接上代码

```go
package main

import (
	"bufio"
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"goapi/config"
	"goapi/pkg/logger"
	"goapi/pkg/pprof"
	KlineCommon "goapi/service/kline-common"
	kconfig "goapi/service/kline-mql5/mql5/config"
	"goapi/service/kline-mql5/mql5/wsdata"
	"io"
	"io/ioutil"
	"net"
	"net/http"
	"net/url"
	"time"
)

/**

转发服务，主要是用来转发 mql5 的数据到各个服务器，用http的方式转发

 **/

func init() {
	var cstZone = time.FixedZone("CST", 7*3600) // 东七
	time.Local = cstZone
	// 初始化配置信息
	config.Initialize()
	// 定义日志目录
	logger.Init(kconfig.ServiceLog)
}

func main() {
	// pprof 分析
	pprof.Debug(":6072")
	// 创建TCP监听
	listener, err := net.Listen("tcp", ":5555")
	if err != nil {
		logger.Error(err)
		return
	}
	defer listener.Close()
	logger.Info("服务已启动，等待接收数据")
	// 处理接收到的连接
	var tempDelay time.Duration
	for {
		rw, errs := listener.Accept()
		if errs != nil {
			if ne, ok := errs.(net.Error); ok && ne.Temporary() {
				if tempDelay == 0 {
					tempDelay = 5 * time.Millisecond
				} else {
					tempDelay *= 2
				}
				if max := 1 * time.Second; tempDelay > max {
					tempDelay = max
				}
				logger.Error(errs)
				logger.Info(tempDelay)
				time.Sleep(tempDelay)
				continue
			}
			logger.Error(errs)
			panic(errs)
		}
		tempDelay = 0
		// 在新的goroutine中处理连接
		handleConnection(rw)
	}
}

// 处理Socket连接
func handleConnection(conn net.Conn) {
	defer conn.Close()
	reader := bufio.NewReader(conn)
	for {
		message, err := reader.ReadBytes('}')
		if err != nil {
			if err == io.EOF {
				logger.Error(errors.New("客户端链接关闭"))
				break
			}
			logger.Error(err)
			break
		}
		var mql5data wsdata.Mql5
		err = json.Unmarshal(message, &mql5data)
		if err != nil {
			logger.Error(err)
			time.Sleep(time.Millisecond * 100)
			continue
		}
		info := checkExists(mql5data.Name)
		if len(info.ContractCode) <= 0 {
			continue
		}
		bytesData := bytes.Trim(message, "\x00")
		// 转发服务，将数据分发到不同的服务器
		Forward(info.ContractCode, string(bytesData))
	}
}

func checkExists(code string) KlineCommon.Info {
	CodeData := KlineCommon.GetData(kconfig.KlineSource)
	var info KlineCommon.Info
	for _, item := range CodeData {
		if item.Symbol == code {
			info = item
			return info
		}
	}
	return info
}

// 转发数据

func Forward(index, item string) {
	serves := []string{
		"http://172.31.0.4:7104",
		"https://baidu.com",
		"https://qq.com",
	}
	for _, HOST := range serves {
		baseURL := HOST + "/app/v3/other/pushList.json"
		go pushToClient(baseURL, index, item)
	}
	//baseURL := "http://127.0.0.1:7104/app/v3/other/pushList.json"
	//go pushToClient(baseURL, index, item)
}

type Res struct {
	Code int `json:"code"`
	Data struct {
		Result bool `json:"result"`
	} `json:"data"`
	Msg   string `json:"msg"`
	ReqId string `json:"reqId"`
}

func pushToClient(baseURL, index, item string) {
	params := url.Values{}
	params.Set("index", index)
	params.Set("item", item)
	urls := fmt.Sprintf("%s?%s", baseURL, params.Encode())
	response, err := http.Get(urls)
	if err != nil {
		logger.Error(err)
		return
	}
	if response.StatusCode != 200 {
		logger.Info(response.Status, "-----", urls)
		return
	}
	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		logger.Error(err)
		return
	}
	var res Res
	err = json.Unmarshal(body, &res)
	if err != nil {
		logger.Error(err)
		return
	}
	if res.Code != 1 {
		logger.Info(res)
	}
	defer func(Body io.ReadCloser) {
		err = Body.Close()
		if err != nil {
			logger.Error(err)
		}
	}(response.Body)
}

```

- 使用编译器编译一下就可以运行了

```shell
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go
```