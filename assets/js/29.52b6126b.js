(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{311:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mongodb-创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-创建数据库"}},[s._v("#")]),s._v(" MongoDB 创建数据库")]),s._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("p",[s._v("MongoDB创建数据库的语法格式如下，如果数据库不存在，则创建数据库，否则切换到置顶数据库。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("use DATABASE_NAME\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[s._v("#")]),s._v(" 实例")]),s._v(" "),a("ul",[a("li",[s._v("以下我们创建了数据库"),a("code",[s._v("iszmxw")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use iszmxw\nswitched to db iszmxw\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db\niszmxw\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("如果你想查看所有的数据库，可以使用"),a("code",[s._v("show dbs")]),s._v("命令：")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\nadmin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\nconfig  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("可以看到，我们刚刚创建的数据库"),a("code",[s._v("iszmxw")]),s._v("并不在数据库列表中，如果要显示它，我们需要向（"),a("code",[s._v("iszmxw")]),s._v("）数据库中插入一些数据，MongoDB 中默认的数据库为 test，如果你没有创建新的数据库，集合将存放在 test 数据库中。")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db\niszmxw\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.account.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'account'")]),s._v(":10000,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'age'")]),s._v(":25,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sex'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'男'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nickname'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'小明哥'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nWriteResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nInserted"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show dbs\nadmin   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\nconfig  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\niszmxw  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".000GB\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("注意: 在 MongoDB 中，集合只有在内容插入后才会创建! 就是说，创建集合(数据表)后要再插入一个文档(记录)，集合才会真正创建。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);