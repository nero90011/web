/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-08-19 17:27:05
 * @LastEditTime: 2020-03-21 01:36:16
 * @LastEditors: Do not edit
 * @Description:
 */

/*
1. es6方法的name属性
    1. Function.prototype.bind(obj) :
    作用: 将函数内的this绑定为obj, 并将函数返回
2.  区别bind()与call()和apply()?
    * 都能指定函数中的this
    * call()/apply()是立即调用函数
    * bind()是将函数返回
    foo.call(obj, '123');// 直接从第二个参数开始,依次传入
    foo.apply(obj, ['123']);// 第二个参数必须是数组,传入放在数组里

    foo.bind(obj, '123')();// 绑定完this 不会立即调用当前函数 而是将函数返回

3. es6箭头函数
    作用: 定义匿名函数
    * 基本语法:
    * 没有参数: () => console.log('xxxx')
    * 一个参数: i => i+2
    * 大于一个参数: (i,j) => i+j
    * 函数体不用大括号: 默认返回结果
    * 函数体如果有多个语句, 需要用{}包围，若有需要返回的内容，需要手动返回
    * 使用场景: 多用来定义回调函数

    * 箭头函数的特点：
        1、简洁
        2、箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this
        3、扩展理解： 箭头函数的this看外层的是否有函数，
            如果有，外层函数的this就是内部箭头函数的this，
            如果没有，则this是window。
            
4. es6形参的默认值----当不传入参数的时候默认使用形参里的默认值
    function Point(x = 1,y = 2) {
    this.x = x;
    this.y = y;
    }

*/

/* es6 */
// 1.方法的name属性
const person = {
    sayName() {
        console.log('hello!');
    }
};
// eslint-disable-next-line no-console
console.debug(person.sayName.name);


/*
1. Function.prototype.bind(obj) :
  * 作用: 将函数内的this绑定为obj, 并将函数返回
2. 面试题: 区别bind()与call()和apply()?
  * 都能指定函数中的this
  * call()/apply()是立即调用函数
  * bind()是将函数返回
*/

let obj = {
    username: 'nero'
};

function foo(data) {
    console.log(this, data);
}
// 传入参数的形式
foo.call(obj, '123'); // 直接从第二个参数开始,依次传入
foo.apply(obj, ['123']); // 第二个参数必须是数组,传入放在数组里

foo.bind(obj, '123')(); // 绑定完this 不会立即调用当前函数 而是将函数返回
// var bar=foo.bind(obj)
// console.log(bar)
setTimeout(function() {
    console.log(this);
}.bind(obj), 1000);

/**
 * 箭头函数
 */
let fun = () => console.log('我是箭头函数');
fun();
// 形参的情况
// 1.无形参,不能省略括号
let fun1 = () => console.log('');
fun1();

// 2.只有一个形参的时候,括号可以省略
let fun2 = (a) => console.log(a);
fun2('aaa');
// 3.两个及两个以上的形参的时候,括号不能省略
let fun3 = (x, y) => console.log(x, y);
fun3(25, 36);

// 函数体的情况

// 1.只有一条语句或者是表达式时,{}可以省略-->好处:会自动返回语句执行的结果或者是表达式的结果
let fun4 = (x, y) => x + y;
console.log(fun4(1, 2));
// 2.多条语句,大括号不能省略
let fun5 = (x, y) => {
    console.log(x, y);
    return x + y;
};
console.log(fun5(2, 3));

// 测试箭头函数的this
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
btn1.onclick = function() {
    alert(this); // btn1
};
btn2.onclick = () => {
    alert(this); // window
};

let obj = {
    name: '箭头函数',
    getName: function() { // 如果此处写法改成箭头函数则this指向window
        btn2.onclick = () => {
            alert(this); // obj
        };
    }
};
obj.getName();