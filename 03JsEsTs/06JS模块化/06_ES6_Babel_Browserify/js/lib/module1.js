/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-12 14:00:43
 * @LastEditTime: 2020-03-20 23:47:51
 * @LastEditors: Do not edit
 * @Description:
 */

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.foo = foo;
exports.bar = bar;
// 分别暴露
function foo() {
    console.log('module1 foo()');
}

function bar() {
    console.log('module1 bar()');
}

var DATA_ARR = exports.DATA_ARR = [1, 3, 5, 1];
