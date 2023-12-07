const _nav = require('./nav')
const _sidebar = require('./sidebar')

module.exports = {
    title: '小明哥笔记', // 设置网站标题
    description: '记录日常开发笔记',
    base: '/studys/', // 设置站点根路径
    dest: 'docs', // 设置输出目录
    head: [
        ['link', { rel: 'icon', href: '/assets/img/plan.svg' }],
        ['meta', { 'name': 'viewport', content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" }],
        ['script', { src: 'https://s4.cnzz.com/z_stat.php?id=1279222603&web_id=1279222603' }]
    ],
    markdown: {
        lineNumbers: true, // 代码显示行号
        // markdown-it-anchor 的选项
        // anchor: { permalink: false },
        // // markdown-it-toc 的选项
        // toc: { includeLevel: [1, 2] },
        // config: md => {
        //   // 使用更多 markdown-it 插件！
        //   md.use(require('markdown-it-xxx'))
        // }
    },
    themeConfig: {
        logo: '/assets/img/plan.svg',
        nav: _nav,
        sidebar: _sidebar,
        sidebarDepth: 2,        // 默认的深度是 1，它将提取到 h2 的标题，设置成 0 将会禁用标题（headers）链接，同时，最大的深度为 2，它将同时提取 h2 和 h3 标题。
        lastUpdated: '最近更新', // 显示更新时间
        searchMaxSuggestoins: 10,
        displayAllHeaders: false,  // 显示所有页面的标题链接，默认值：false
        serviceWorker: {
            updatePopup: true,
            // updatePopup: {
            //   message: "New content is available.",
            //   buttonText: 'Refresh'
            // }
        },
        // 假定 GitHub。也可以是一个完整的 GitLab URL。
        repo: 'https://github.com/iszmxw/studys.git'
    },
    plugins: [
        // 'axios'  // 配置插件
    ]
}