useEffect 销毁写法

```
return () => {
  // do something
}
```
返回一个函数，这个函数会在组件销毁时执行



有两个记忆函数
useMemo
useCallback





深拷贝相关


拓展运算符如果只有一层简单的值可以算做深拷贝

有其他对象的话，就是浅拷贝


json.parse(json.stringify())可以实现深拷贝
但是这个方法有局限性，比如不能拷贝函数，不能拷贝正则，不能拷贝symbol   
undefined会被转成null

immutable.js

