# wine 下运行mql5

## mql5是一款在 `windows` 下运行的程序

```text
由于之前采集的数据源程序一直在 windows 服务器中运行，先前业务比较繁忙，写好了就直接跑在 windows 中了
现在抽空折腾一下，把原有的 exe 程序放在 linux 中统一管理和运行，这里就用到我们之前都封装的 docker + ubuntu + wine 这三件套了
```

## 首先我们拉取镜像，直接运行一个容器

```bash
# 拉取镜像 iszmxw/wine:8.0.2 运行一个 MQL5 的容器
docker run -itd --name=MQL5 --net=host iszmxw/wine:8.0.2 bash
# 查看容器的 id
docker ps -a |grep MQL5                                                                                            MQL5
# 进入容器 id  56710fe0ce54
docker exec -it 56710fe0ce54 bash

# 查看 xrdp 远程服务是否开启，开了我们才能进行远程桌面控制
service xrdp status
# 没启动的话执行下面的命令启动
service xrdp restart
# 启动 dbus 服务
service dbus start
# 看到 ok 表示已经成功了
```

## 使用远程桌面链接工具进行链接

- windows 用户

由于 `windows` 自带远程桌面功能直接 `win + R` 输入 `mstsc` 回车即可唤起工具

- 我的是 `Mac` 我用的是 `Microsoft Remote Desktop`

输入服务器的 `ip` 以及账号密码即可进入，端口都是默认的 `3389`

账号：wineuser/root
密码：ethanyep

建议使用 `wineuser` 的身份进入

## 下载 mql5 程序

- 我用本机电脑下载的
- 下载好后上传到宿主机
- 然后复制到容器

eg:

```bash
[yezhiming@test-server ~]$ pwd
/home/yezhiming
[yezhiming@test-server ~]$ ls
binary  Fonts  mt5setup.exe  rabbitmq
[yezhiming@test-server ~]$ 
# 这里我上传的事这个位置，我的容器叫 MQL5
docker cp mt5setup.exe MQL5:/home/wineuser/
# 这里我直接复制到 MQL5 容器的 wineuser 账户的主目录下
# 另外我这里的 Fonts 也一并复制过去，复制到 MQL5:/home/wineuser/.wine/drive_c/windows/
docker cp Fonts/ MQL5:/home/wineuser/.wine/drive_c/windows/
# 上面的 Fonts 是中文字体，我这里是找了一台 windows11 的字体目录挑选的几个中文字体，你们可以看着来，主要是为了不想看到 wine 中文乱码
```


## 安装 mql5 

```bash
wine mt5setup.exe
```

![安装](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212112529.png)

![安装](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212114609.png)

- 安装好了桌面会出现两个图标
  
![安装](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212114931.png)

- 好了开始运行程序写一个小 `demo` 试试

![运行错误](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212117387.png)

- 当我们准备编译的时候出现了一个错误

```bash
internal error #112
 1 errors,0 warnings
```

## 解决错误

- 网上查找资料后说是 缺少 `winhttp` 组件

- 安装 `winhttp` 需要用到 winetrick


## 安装 `winetricks`

```bash
apt-get install winetricks
```


## 安装 `winhttp`

```bash
winetricks winetricks
```

![安装winehttp](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212122345.png)











