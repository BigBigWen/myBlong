#### toString()
- 基础数据类型使用该方法将值按其字面量形式输出
- 复杂数据类型调用该方法时
  - 将  `Object` 类型转化为 `string` 类型(JavaScript原生的Array,Date, RegExp类型以及Number,Boolean,string这些包装类型都是Object的子类)
  1. 其中 Object 和 Number 类型都是重写了toString()方法
  ```
  console.log(1.toString()) //报错
  console.log(1..toString())//1
  console.log(1.2.toString())//1.2

  ```
  数字后面的点,第一个被js引擎认为是小数点,第二个是属性访问语法
  基本数据类型的值都是常量,而常量是没有办法的,为什么能调用方法呢,是这样的,五种基本类型除了null,undefined以外都有与之对应的特殊引用类型-包装类型.当代码执行时,底层会对基本数据类型做一个数据转换,即将基本类型转换为引用类型
