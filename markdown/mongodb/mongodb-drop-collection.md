# MongoDB 删除集合

- 本章节我们为大家介绍如何使用 MongoDB 来删除集合。

- MongoDB 中使用 drop() 方法来删除集合。

## **语法格式**

```sh
db.collection.drop()
```

参数说明：

- 无

## **返回值**

> 如果成功删除选定集合，则 drop() 方法返回 true，否则返回 false。

## 实例

- 在数据库 mydb 中，我们可以先通过 **show collections** 命令查看已存在的集合：

```sh
>use mydb
switched to db mydb
>show collections
mycol
mycol2
iszmxw
>
```

- 接着删除集合 mycol2 :

```sh
>db.mycol2.drop()
true
>
```

- 通过 show collections 再次查看数据库 mydb 中的集合：

```sh
>show collections
mycol
iszmxw
>
```

::: tip 提示
从结果中可以看出 mycol2 集合已被删除。
:::