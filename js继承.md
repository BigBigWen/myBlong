### 问题场景 假设我们有一个父构造函数People和子构造函数Student, People有一个age属性和一个getAge方法, student有一个num属性和一个getNum方法,如下
```
function People(age){
  this.age = age
}
People.prototype.getAge = () => {console.log(this.age)}

function Student (num){
  this.num = num
}
Student.prototype.getNum = () => {console,log(this.num)}
```
实现Student继承People
#### 利用原型机制,将子构造函数的原型属性设置为父构造函数的实例
```
function Student(num){
  this.num=num
}
Student.prototype = new People()
Student.prototype.getNum = ()=>{console.log(this.num)}
let Stu1 = new Student('123)
```
这样基本实现了我们的需求,但是有以下缺点
1. 子类无法继承父类的实例属性
2. 会将父类的实例属性,扩展到子类的原型上
3. 修改子类的原型属性,会导致在Stu1上获取constructor属性为People,而不是Student