### 问题场景 假设我们有一个父构造函数People和子构造函数Student, People有一个age属性和一个getAge方法, student有一个num属性和一个getNum方法,如下
```
function People(age){
  this.age = age
}
People.prototype.getAge = () => {console.log(this.age)} //错误示例 给构造器添加方法不能使用箭头函数,会使this恒指向构造函数,正常情况this指向创建的实例对象
People.prototype.getAge = function(){console.log(this.age)}

function Student (num){
  this.num = num
}
Student.prototype.getNum = function{console.log(this.num)}
```
实现Student继承People
#### 继承父类的属性 
在一个子构造函数中,可以通过调用父构造函数的call方法来实现继承,类似java.使用Student创建的对象实例都会拥有People构造函数中的添加的age属性.
```
 function Student(age,num){
   this.num = num
   People.call(age,this)

 }
 ```
#### 利用原型机制,将子构造函数的原型属性设置为父构造函数的实例 
```
function Student(num){
  this.num=num
}
Student.prototype = new People() //
Student.prototype.getNum = function{console.log(this.num)}
let Stu1 = new Student('123)
```
这样基本实现了我们的需求,但是有以下缺点
1. 子类无法继承父类的实例属性
2. 会将父类的实例属性,扩展到子类的原型上
3. 修改子类的原型属性,会导致在Stu1上获取constructor属性为People,而不是Student

#### 使用深拷贝实现继承
let Student = Object.assign({},new Pelple) // 只继承父类的属性,继承属性和不可枚举属性无法继承
let Student = Object.create(People.prototype) // 继承父类的方法