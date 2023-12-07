# MongoDB 插入文档

本章节中我们将向大家介绍如何将数据插入到 MongoDB 的集合中。

文档的数据结构和 JSON 基本一样。

所有存储在集合中的数据都是 BSON 格式。

BSON 是一种类似 JSON 的二进制形式的存储格式，是 Binary JSON 的简称。

## 插入文档

MongoDB 使用 insert() 或 save() 方法向集合中插入文档，语法如下：

```sh
db.COLLECTION_NAME.insert(document)

db.COLLECTION_NAME.save(document)
```

- save()：如果 _id 主键存在则更新数据，如果不存在就插入数据。该方法新版本中已废弃，可以使用 `db.collection.insertOne()` 或 `db.collection.replaceOne()` 来代替。
- insert(): 若插入的数据主键已经存在，则会抛 **org.springframework.dao.DuplicateKeyException** 异常，提示主键重复，不保存当前数据。

**3.2 版本之后新增了 `db.collection.insertOne()` 和 `db.collection.insertMany()`。**

- `db.collection.insertOne()` 用于向集合插入一个新文档，语法格式如下：

```sh
db.collection.insertOne(
   <document>,
   {
      writeConcern: <document>
   }
)
```

- `db.collection.insertMany()` 用于向集合插入一个多个文档，语法格式如下：

```sh
db.collection.insertMany(
   [ <document 1> , <document 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <boolean>
   }
)
```

## 参数说明

- document：要写入的文档。
- writeConcern：写入策略，默认为 1，即要求确认写操作，0 是不要求。
- ordered：指定是否按顺序写入，默认 true，按顺序写入。

## writeConcern选项
MongoDB支持的WriteConncern选项如下

**w: 数据写入到number个节点才向用客户端确认**
   - {w: 0} 对客户端的写入不需要发送任何确认，适用于性能要求高，但不关注正确性的场景
   - {w: 1} 默认的writeConcern，数据写入到Primary就向客户端发送确认
   - {w: 'majority'} 数据写入到副本集大多数成员后向客户端发送确认，适用于对数据安全性要求比较高的场景，该选项会降低写入性能

**j: 写入操作的journal持久化后才向客户端确认**
   - 默认为”{j: false}，如果要求Primary写入持久化了才向客户端确认，则指定该选项为true

**wtimeout: 写入超时时间，仅w的值大于1时有效。**
   - 当指定{w: }时，数据需要成功写入number个节点才算成功，如果写入过程中有节点故障，可能导致这个条件一直不能满足，从而一直不能向客户端发送确认结果，针对这种情况，客户端可设置wtimeout选项来指定超时时间，当写入过程持续超过该时间仍未结束，则认为写入失败。

## 实例

- 以下文档可以存储在 MongoDB 的 iszmxw 数据库 的 col 集合中：

```sh
> db.col.insert({title: 'MongoDB 学习', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '小明哥',
    url: 'http://note.iszmxw.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
```

- 以上实例中 col 是我们的集合名，如果该集合不在该数据库中， MongoDB 会自动创建该集合并插入文档。

- 查看已插入文档：

```sh
> db.col.find()
{ "_id" : ObjectId("56064886ade2f21f36b03134"), "title" : "MongoDB 学习", "description" : "MongoDB 是一个 Nosql 数据库", "by" : "小明哥", "url" : "http://note.iszmxw.com", "tags" : [ "mongodb", "database", "NoSQL" ], "likes" : 100 }
> 
```

- 我们也可以将数据定义为一个变量，如下所示：


```sh
> document=({title: 'MongoDB 学习', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '小明哥',
    url: 'http://note.iszmxw.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
});
```

- 执行后显示结果如下：

```sh
{
        "title" : "MongoDB 学习",
        "description" : "MongoDB 是一个 Nosql 数据库",
        "by" : "小明哥",
        "url" : "http://note.iszmxw.com",
        "tags" : [
                "mongodb",
                "database",
                "NoSQL"
        ],
        "likes" : 100
}
```

- 执行插入操作：

```sh
> db.col.insert(document)
WriteResult({ "nInserted" : 1 })
> 
```

- 插入文档你也可以使用 db.col.save(document) 命令。如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定 _id 字段，则会更新该 _id 的数据。