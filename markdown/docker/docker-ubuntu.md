## 介绍

- 使用 `docker` 安装 `ubuntu` 并且使用远程桌面控制

## 安装

我这里安装的是市面上常用的 `20.04` 版本

![图1](https://raw.githubusercontent.com/iszmxw/FigureBed/36c6d4aec49cb0c9989bfd1fddb77194ee886309/images/others/Snipaste_2023-11-07_09-56-34.png)

进入 [https://hub.docker.com/](https://hub.docker.com/) 查找对应的版本


## 安装 ubuntu

```shell
# 拉取镜像
docker pull ubuntu:20.04
# 启动容器并且进入容器
docker run --privileged --net=host --name=xw-wine -itd ubuntu:20.04 bash
```

## 安装远程桌面

- 在 Ubuntu 源仓库有很多桌面环境供你选择。一个选择是安装 Gnome，它是 Ubuntu 20.04 的默认桌面环境。另外一个选项就是安装 Xface。它是快速，稳定，并且轻量的桌面环境，使得它成为远程服务器的理想桌面。

- 我这里选择的是轻量级的 Xface


```shell

# 安装 Gnome
sudo apt-get update
sudo apt install ubuntu-desktop

# 安装 Xface
sudo apt update
sudo apt install xubuntu-desktop

```


## 安装 Xrdp

```shell
# Xrdp 被包含在默认的 Ubuntu 软件源中。想要安装它，运行：
sudo apt install xrdp 

# 一旦安装完成，Xrdp 服务将会自动启动。你可以输入下面的命令，验证它：
systemctl status xrdp 
# 或者
service xrdp status
```

- 默认情况下，Xrdp 使用/etc/ssl/private/ssl-cert-snakeoil.key,它仅仅对“ssl-cert” 用户组成语可读。运行下面的命令，将xrdp用户添加到这个用户组：

```shell
sudo adduser xrdp ssl-cert  
```

- 重启 Xrdp 服务，使得修改生效：
```shell
sudo systemctl restart xrdp
```


```shell
docker run --net=host --name xw-wine -it iszmxw/xw-wine:1.0 bash

docker cp /home/Fonts.zip a7ccaf941a17:/root

```


## xface 下安装 微信

[linux mint xfce下使用wine安装微信](https://blog.csdn.net/machealx/article/details/128673776)


参考资料 https://developer.aliyun.com/article/762186