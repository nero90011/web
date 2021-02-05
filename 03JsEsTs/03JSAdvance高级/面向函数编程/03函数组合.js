/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 16:30:53
 * @LastEditTime: 2019-09-17 13:12:21
 * @LastEditors: Do not edit
 * @Description: 函数组合用于解决柯里化的复杂函数嵌套
 * @别名:双面胶三面胶等
 */
// 要求:都为纯函数
// 举例1:
const compose = function (f, g) { // compose(f,g)(x)
    return function (x) {
        return f(g(x));// 先执行g(x) 返回的值作为 f的参数
    };
};
// es6写法
var composeES6 = (f, g)=>((x)=>f(g(x)));
// 使用
let add1 = x=>x + 1;
let mul5 = x=>x * 5;
let count = composeES6(mul5, add1)(2);
console.log(count);

// 使用2
let first = (arr)=>arr[0];// 获取arr[0]
let reverse = (arr)=>arr.reverse();// 倒置
let last = compose(first, reverse);
console.log(last([1, 2, 3, 4, 5]));

// 注意:执行顺序为先后再前
