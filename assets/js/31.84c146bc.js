(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{313:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-删除数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-删除数据库"}},[s._v("#")]),s._v(" MongoDB 删除数据库")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[s._v("MongoDB 删除数据库的语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("db.dropDatabase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除当前数据库，默认为 test，你可以使用 db 命令查看当前数据库名。")]),s._v(" "),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("p",[s._v("以下实例我们删除了数据库 iszmxw。")]),s._v(" "),a("p",[s._v("首先，查看所有数据库：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\nadmin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\nconfig  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\niszmxw  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("接下来我们切换到数据库 iszmxw：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use iszmxw\nswitched to db iszmxw\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行删除命令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db."),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("dropDatabase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dropped"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iszmxw"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ok"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("最后，我们再通过 show dbs 命令数据库是否删除成功：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\nadmin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\nconfig  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"删除集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除集合"}},[s._v("#")]),s._v(" 删除集合")]),s._v(" "),a("p",[s._v("集合删除语法格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("db.collection.drop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以下实例删除了 iszmxw 数据库中的集合 site：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use iszmxw\nswitched to db iszmxw\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createCollection"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iszmxw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先创建集合，类似数据库中的表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show tables                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show collections 命令会更加准确点")]),s._v("\niszmxw\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.iszmxw.drop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show tables\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);