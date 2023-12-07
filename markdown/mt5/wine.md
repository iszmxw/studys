# 必要说明

- `mt5` 是一款在 `windows` 下运行的程序，

- 由于之前采集的数据源程序一直在 windows 服务器中运行
- 先前业务比较繁忙，写好了就直接就丢在 windows 服务器中了
- 现在抽空折腾一下把原有的 exe 程序放在 linux 中统一管理和运行
- 这里就用到我们之前都封装的 docker + ubuntu + wine 这三件套了
- 主要是靠 wine 下运行 mt5

## 运行容器

- 首先我们拉取镜像，直接运行一个容器

```bash
# 拉取镜像 iszmxw/wine:8.0.2 运行一个 mt5 的容器
docker run -itd --name=mt5 --net=host iszmxw/wine:8.0.2 bash
# 查看容器的 id
docker ps -a |grep mt5
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

## 远程控制

-  使用远程桌面链接工具进行链接

- windows 用户

由于 `windows` 自带远程桌面功能直接 `win + R` 输入 `mstsc` 回车即可唤起工具

- 我的是 `Mac` 我用的是 `Microsoft Remote Desktop`

输入服务器的 `ip` 以及账号密码即可进入，端口都是默认的 `3389`

账号：wineuser/root
密码：ethanyep

建议使用 `wineuser` 的身份进入

## 下载程序

- 下载 `mt5`

- 我用本机电脑下载的
- 下载好后上传到宿主机
- 然后复制到容器

eg:

```bash
[ubuntu@test-server ~]$ pwd
/home/ubuntu
[ubuntu@test-server ~]$ ls
binary  Fonts  mt5setup.exe  rabbitmq
[ubuntu@test-server ~]$ 
# 这里我上传的事这个位置，我的容器叫 mt5
docker cp mt5setup.exe mt5:/home/wineuser/
# 这里我直接复制到 mt5 容器的 wineuser 账户的主目录下
# 另外我这里的 Fonts 也一并复制过去，复制到 mt5:/home/wineuser/.wine/drive_c/windows/
docker cp Fonts/ mt5:/home/wineuser/.wine/drive_c/windows/
# 上面的 Fonts 是中文字体，我这里是找了一台 windows11 的字体目录挑选的几个中文字体，你们可以看着来，主要是为了不想看到 wine 中文乱码,不用处理也行直接英文
```


## 安装程序

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

## 查找原因

- 网上查找资料后说是 缺少 `winhttp` 组件

- 安装 `winhttp` 需要用到 winetrick

```text
但是我通过一顿操作后发现还是无解，排除掉了这个原因，我运行其他的exe软件又可以，
这里只要编译的时候就会提示#112 内部错误，所以排除掉了那些问题，再找找其他原因
```

## 解决错误

- 通过谷歌我找到了一些和我有同样错误的用户，对照了官方错误表只说是内部错误
- 不够详细，有些人说是权限问题，我也有些怀疑

![谷歌搜索](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071738271.png)

![论坛用户回复](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071741090.png)

- 由于我用的是容器，另外我拿我的 `mac` 和 `ubuntu` 机器装了都可以正常运行和编译，
- 那么可能就是容器的问题了，通过网上查找相关资料发现容器有设置权限的参数

- `privileged` ：用来给容器 `root` 权限，不安全的

- 我们这里 删除掉之前的容器，加上特殊权限后再试试

```sh
# 停止容器
docker stop mt5
# 删除容器
docker rm mt5
# 加上特殊参数执行容器
docker run -itd --privileged=true --name=mt5 --net=host iszmxw/wine:8.0.2 bash
```

## 论证解决

- 再次尝试上面步骤，安装运行 mt5 

随便写一个程序，编译运行，搞定了

![示例1](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071751236.png)

![示例1](https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071753034.png)







