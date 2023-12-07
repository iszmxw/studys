# MongoDB 删除文档

- 在前面的几个章节中我们已经学习了MongoDB中如何为集合添加数据和更新数据。在本章节中我们将继续学习MongoDB集合的删除。

- MongoDB remove()函数是用来移除集合中的数据。

- MongoDB数据更新可以使用update()函数。在执行remove()函数前先执行find()命令来判断执行的条件是否正确，这是一个比较好的习惯。

## 语法

- remove() 方法的基本语法格式如下所示：

```sh
db.collection.remove(
   <query>,
   <justOne>
)
```

- 如果你的 MongoDB 是 2.6 版本以后的，语法格式如下：

```sh
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
```

**参数说明：**

- **query** :（可选）删除的文档的条件。
- **justOne** : （可选）如果设为 true 或 1，则只删除一个文档，如果不设置该参数，或使用默认值 false，则删除所有匹配条件的文档。
- **writeConcern** :（可选）抛出异常的级别。

## 实例

- 以下文档我们执行两次插入操作：

```sh
db.col.insert({title: 'MongoDB 学习', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '小明哥',
    url: 'http://note.iszmxw.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```

- 使用 find() 函数查询数据：

```sh
> db.col.find()
{ "_id" : ObjectId("56066169ade2f21f36b03137"), "title" : "MongoDB 学习", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "小明哥", "url" : "http://note.iszmxw.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
{ "_id" : ObjectId("5606616dade2f21f36b03138"), "title" : "MongoDB 学习", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "小明哥", "url" : "http://note.iszmxw.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
```

- 接下来我们移除 title 为 'MongoDB 学习' 的文档：

```sh
>db.col.remove({'title':'MongoDB 学习'})
WriteResult({ "nRemoved" : 2 })           # 删除了两条数据
>db.col.find()
……                                        # 没有数据
```


- 如果你只想删除第一条找到的记录可以设置 justOne 为 1，如下所示：

```sh
> db.COLLECTION_NAME.remove(DELETION_CRITERIA,1)
```

- 如果你想删除所有数据，可以使用以下方式（类似常规 SQL 的 truncate 命令）：

- 旧版方法
```sh
> db.col.remove({})
> db.col.find()
>
```

::: tip 温馨提示
remove() 方法已经过时了，现在官方推荐使用 deleteOne() 和 deleteMany() 方法。
:::

```sh
> db.col.deleteMany({})                             # 如删除集合下全部文档：
> db.col.deleteMany({ title: 'MongoDB 学习' })      # 删除 title 等于 MongoDB 学习 的全部文档
> db.col.deleteOne( { title: 'MongoDB 学习' })      # 删除 title 等于 MongoDB 学习 的一个文档
> db.col.find()
>
```