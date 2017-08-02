### 
箭头函数作用域: 在哪里声明,作用域就指向谁
var obj = {}
var fun1 = function () { console.log(this)} 
fun1() //指向window
fun1.call(obj) //指向obj

const fun2 = () => { console.log(this) }
fun2() //指向window
fun2.call(obj) //指向window