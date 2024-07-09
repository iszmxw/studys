(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{323:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"必要说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#必要说明"}},[s._v("#")]),s._v(" 必要说明")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("mt5")]),s._v(" 是一款在 "),t("code",[s._v("windows")]),s._v(" 下运行的程序，")])]),s._v(" "),t("li",[t("p",[s._v("由于之前采集的数据源程序一直在 windows 服务器中运行")])]),s._v(" "),t("li",[t("p",[s._v("先前业务比较繁忙，写好了就直接就丢在 windows 服务器中了")])]),s._v(" "),t("li",[t("p",[s._v("现在抽空折腾一下把原有的 exe 程序放在 linux 中统一管理和运行")])]),s._v(" "),t("li",[t("p",[s._v("这里就用到我们之前都封装的 docker + ubuntu + wine 这三件套了")])]),s._v(" "),t("li",[t("p",[s._v("主要是靠 wine 下运行 mt5")])])]),s._v(" "),t("h2",{attrs:{id:"运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行容器"}},[s._v("#")]),s._v(" 运行容器")]),s._v(" "),t("ul",[t("li",[s._v("首先我们拉取镜像，直接运行一个容器")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像 iszmxw/wine:8.0.2 运行一个 mt5 的容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mt5 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host iszmxw/wine:8.0.2 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看容器的 id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mt5\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器 id  56710fe0ce54")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" 56710fe0ce54 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 xrdp 远程服务是否开启，开了我们才能进行远程桌面控制")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" xrdp status\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没启动的话执行下面的命令启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" xrdp restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 dbus 服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" dbus start\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 看到 ok 表示已经成功了")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h2",{attrs:{id:"远程控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程控制"}},[s._v("#")]),s._v(" 远程控制")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用远程桌面链接工具进行链接")])]),s._v(" "),t("li",[t("p",[s._v("windows 用户")])])]),s._v(" "),t("p",[s._v("由于 "),t("code",[s._v("windows")]),s._v(" 自带远程桌面功能直接 "),t("code",[s._v("win + R")]),s._v(" 输入 "),t("code",[s._v("mstsc")]),s._v(" 回车即可唤起工具")]),s._v(" "),t("ul",[t("li",[s._v("我的是 "),t("code",[s._v("Mac")]),s._v(" 我用的是 "),t("code",[s._v("Microsoft Remote Desktop")])])]),s._v(" "),t("p",[s._v("输入服务器的 "),t("code",[s._v("ip")]),s._v(" 以及账号密码即可进入，端口都是默认的 "),t("code",[s._v("3389")])]),s._v(" "),t("p",[s._v("账号：wineuser/root\n密码：ethanyep")]),s._v(" "),t("p",[s._v("建议使用 "),t("code",[s._v("wineuser")]),s._v(" 的身份进入")]),s._v(" "),t("h2",{attrs:{id:"下载程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载程序"}},[s._v("#")]),s._v(" 下载程序")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("下载 "),t("code",[s._v("mt5")])])]),s._v(" "),t("li",[t("p",[s._v("我用本机电脑下载的")])]),s._v(" "),t("li",[t("p",[s._v("下载好后上传到宿主机")])]),s._v(" "),t("li",[t("p",[s._v("然后复制到容器")])])]),s._v(" "),t("p",[s._v("eg:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ubuntu@test-server ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/home/ubuntu\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ubuntu@test-server ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nbinary  Fonts  mt5setup.exe  rabbitmq\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ubuntu@test-server ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里我上传的事这个位置，我的容器叫 mt5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" mt5setup.exe mt5:/home/wineuser/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里我直接复制到 mt5 容器的 wineuser 账户的主目录下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另外我这里的 Fonts 也一并复制过去，复制到 mt5:/home/wineuser/.wine/drive_c/windows/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" Fonts/ mt5:/home/wineuser/.wine/drive_c/windows/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上面的 Fonts 是中文字体，我这里是找了一台 windows11 的字体目录挑选的几个中文字体，你们可以看着来，主要是为了不想看到 wine 中文乱码,不用处理也行直接英文")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"安装程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装程序"}},[s._v("#")]),s._v(" 安装程序")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("wine mt5setup.exe\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212112529.png",alt:"安装"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212114609.png",alt:"安装"}})]),s._v(" "),t("ul",[t("li",[s._v("安装好了桌面会出现两个图标")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212114931.png",alt:"安装"}})]),s._v(" "),t("ul",[t("li",[s._v("好了开始运行程序写一个小 "),t("code",[s._v("demo")]),s._v(" 试试")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202311212117387.png",alt:"运行错误"}})]),s._v(" "),t("ul",[t("li",[s._v("当我们准备编译的时候出现了一个错误")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("internal error "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#112")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" errors,0 warnings\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"查找原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找原因"}},[s._v("#")]),s._v(" 查找原因")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("网上查找资料后说是 缺少 "),t("code",[s._v("winhttp")]),s._v(" 组件")])]),s._v(" "),t("li",[t("p",[s._v("安装 "),t("code",[s._v("winhttp")]),s._v(" 需要用到 winetrick")])])]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("但是我通过一顿操作后发现还是无解，排除掉了这个原因，我运行其他的exe软件又可以，\n这里只要编译的时候就会提示#112 内部错误，所以排除掉了那些问题，再找找其他原因\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"解决错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决错误"}},[s._v("#")]),s._v(" 解决错误")]),s._v(" "),t("ul",[t("li",[s._v("通过谷歌我找到了一些和我有同样错误的用户，对照了官方错误表只说是内部错误")]),s._v(" "),t("li",[s._v("不够详细，有些人说是权限问题，我也有些怀疑")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071738271.png",alt:"谷歌搜索"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071741090.png",alt:"论坛用户回复"}})]),s._v(" "),t("ul",[t("li",[t("p",[s._v("由于我用的是容器，另外我拿我的 "),t("code",[s._v("mac")]),s._v(" 和 "),t("code",[s._v("ubuntu")]),s._v(" 机器装了都可以正常运行和编译，")])]),s._v(" "),t("li",[t("p",[s._v("那么可能就是容器的问题了，通过网上查找相关资料发现容器有设置权限的参数")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("privileged")]),s._v(" ：用来给容器 "),t("code",[s._v("root")]),s._v(" 权限，不安全的")])]),s._v(" "),t("li",[t("p",[s._v("我们这里 删除掉之前的容器，加上特殊权限后再试试")])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop mt5\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" mt5\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加上特殊参数执行容器")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--privileged")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mt5 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--net")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("host iszmxw/wine:8.0.2 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"论证解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#论证解决"}},[s._v("#")]),s._v(" 论证解决")]),s._v(" "),t("ul",[t("li",[s._v("再次尝试上面步骤，安装运行 mt5")])]),s._v(" "),t("p",[s._v("随便写一个程序，编译运行，搞定了")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071751236.png",alt:"示例1"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/iszmxw/FigureBed/master/images/studys/202312071753034.png",alt:"示例1"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);