## 官网的安装命令

- [官网安装](https://wiki.winehq.org/MacOS)

我这里按照官网安装了一遍，只能运行 win64 还打不开微信等软件

![img](https://raw.githubusercontent.com/iszmxw/FigureBed/3d9820cc264cd69ca2e3a65325cd9a9e23d032c0/images/others/Snipaste_2023-11-17_11-53-34.png)

- 建议使用下面的方案

## M1 下安装 wine 过程

```bash
# 卸载旧安装
brew uninstall --cask xquartz
brew uninstall --cask wine-stable
rm -rf ~/.wine*

# 安装 M1 下的wine
brew tap gcenx/wine
brew install --cask --no-quarantine wine-crossover

# Output 最后一行
🍺  wine-crossover was successfully installed!
```


# 到此结束