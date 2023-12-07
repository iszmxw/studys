# MongoDB 创建数据库

## 语法

MongoDB创建数据库的语法格式如下，如果数据库不存在，则创建数据库，否则切换到置顶数据库。

```sh
use DATABASE_NAME
```

## 实例

- 以下我们创建了数据库`iszmxw`

```sh
> use iszmxw
switched to db iszmxw
> db
iszmxw
> 
```

- 如果你想查看所有的数据库，可以使用`show dbs`命令：

```sh
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.000GB
> 
```

- 可以看到，我们刚刚创建的数据库`iszmxw`并不在数据库列表中，如果要显示它，我们需要向（`iszmxw`）数据库中插入一些数据，MongoDB 中默认的数据库为 test，如果你没有创建新的数据库，集合将存放在 test 数据库中。

```sh
> db
iszmxw
> db.account.insert({'account':10000,'age':25,'sex':'男','nickname':'小明哥'})
WriteResult({ "nInserted" : 1 })
> show dbs
admin   0.000GB
config  0.000GB
iszmxw  0.000GB
local   0.000GB
test    0.000GB
> 
```


> 注意: 在 MongoDB 中，集合只有在内容插入后才会创建! 就是说，创建集合(数据表)后要再插入一个文档(记录)，集合才会真正创建。