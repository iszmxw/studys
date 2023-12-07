# MongoDB 创建集合

- 本章节我们为大家介绍如何使用 MongoDB 来创建集合。

> MongoDB 中使用 **createCollection()** 方法来创建集合。

## 语法格式

```sh
db.createCollection(name, options)
```

## 参数说明

- name: 要创建的集合名称
- options: 可选参数, 指定有关内存大小及索引的选项

> options 可以是如下参数：

| 字段        | 类型 | 描述                                                                                                                                                     |
|:------------|:-----|:---------------------------------------------------------------------------------------------------------------------------------------------------------|
| capped      | 布尔 | （可选）如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。 **当该值为 true 时，必须指定 size 参数。** |
| autoIndexId | 布尔 | 3.2 之后不再支持该参数。(autoIndexId选项已过时，将在以后的版本中删除)（可选）如为 true，自动在 _id 字段创建索引。默认为 false。                      |
| size        | 数值 | （可选）为固定集合指定一个最大值，即字节数。 **如果 capped 为 true，也需要指定该字段。**                                                                 |
| max         | 数值 | （可选）指定固定集合中包含文档的最大数量。                                                                                                               |

> 在插入文档时，MongoDB 首先检查固定集合的 size 字段，然后检查 max 字段。

## 实例

- 在 test 数据库中创建 iszmxw 集合：

```sh
> use test
switched to db test
> db.createCollection("iszmxw")
{ "ok" : 1 }
>
```

- 如果要查看已有集合，可以使用 `show collections` 或 `show tables` 命令：

```sh
> show collections
iszmxw
```

- 下面是带有几个关键参数的 createCollection() 的用法：

- 创建固定集合 `mycol`，整个集合空间大小 `6142800` KB, 文档最大个数为 `10000` 个。

```sh
> db.createCollection("mycol", { capped : true, size : 6142800, max : 10000 })
{ "ok" : 1 }
> 
```

**在 MongoDB 中，你不需要创建集合。当你插入一些文档时，MongoDB 会自动创建集合。**

```sh
> db.mycol2.insert({"name" : "小明哥"})
> show collections
mycol2
...
```