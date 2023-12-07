module.exports = [
    getSideBar('目录大纲', [
        ['/dashboard/outline', '首页大纲']
    ]),
    getSideBar('MongoDB', [
        ['/mongodb/mongodb-index', 'MongoDB'],
        ['/mongodb/mongodb-install-red-hat', 'RedHat环境安装'],
        ['/mongodb/mongodb-create-database', '创建数据库'],
        ['/mongodb/mongodb-create-collection', '创建集合'],
        ['/mongodb/mongodb-drop-database', '删除数据库'],
        ['/mongodb/mongodb-drop-collection', '删除集合'],
        ['/mongodb/mongodb-insert', '插入文档'],
        ['/mongodb/mongodb-update', '更新文档'],
        ['/mongodb/mongodb-remove', '删除文档'],
        ['/mongodb/mongodb-query', '查询文档'],
        ['/mongodb/mongodb-operators', '条件操作符'],
        ['/mongodb/mongodb-operators-type', '$type操作符'],
        ['/mongodb/mongodb-limit-skip', 'Limit与Skip方法'],
        ['/mongodb/mongodb-sort', '排序'],
        ['/mongodb/mongodb-indexing', '索引'],
        ['/mongodb/mongodb-aggregate', '聚合'],
    ]),
    getSideBar('Docker', [
        ['/docker/docker-index', 'Docker基础'],
        ['/docker/docker-ubuntu', 'Docker安装Ubuntu'],
    ]),
    getSideBar('Wine', [
        ['/wine/wine-M1', 'M1 下安装 wine 过程'],
    ]),
    getSideBar('Mql5', [
        ['/mql5/wine', 'wine下运行mql5'],
    ])
]

function getSideBar(_title, _children) {
    return {
        title: _title,
        collapsable: true,
        // displayAllHeaders: false, // 显示所有页面的标题链接，默认值：false
        children: _children
    }
}