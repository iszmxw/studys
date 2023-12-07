# MongoDB 删除数据库

## 语法

MongoDB 删除数据库的语法格式如下：

```sh
db.dropDatabase()
```

删除当前数据库，默认为 test，你可以使用 db 命令查看当前数据库名。

## 实例

以下实例我们删除了数据库 iszmxw。

首先，查看所有数据库：

```sh
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
iszmxw  0.000GB
```

接下来我们切换到数据库 iszmxw：

```sh
> use iszmxw
switched to db iszmxw
> 
```

执行删除命令：

```sh
> db.dropDatabase()
{ "dropped" : "iszmxw", "ok" : 1 }
> 
```

最后，我们再通过 show dbs 命令数据库是否删除成功：

```sh
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

## 删除集合

集合删除语法格式如下：

```sh
db.collection.drop()
```

以下实例删除了 iszmxw 数据库中的集合 site：

```sh
> use iszmxw
switched to db iszmxw
> db.createCollection("iszmxw")     # 先创建集合，类似数据库中的表
> show tables                       # show collections 命令会更加准确点
iszmxw
> db.iszmxw.drop()
true
> show tables
> 
```