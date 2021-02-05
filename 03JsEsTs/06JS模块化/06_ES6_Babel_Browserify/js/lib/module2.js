/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-12 14:00:43
 * @LastEditTime: 2020-03-20 23:48:34
 * @LastEditors: Do not edit
 * @Description:
 */

Object.defineProperty(exports, '__esModule', {
    value: true
});
// 统一暴露
var data = 'module2 data';

function fun1() {
    console.log('module2 fun1() ' + data);
}

function fun2() {
    console.log('module2 fun2() ' + data);
}

exports.fun1 = fun1;
exports.fun2 = fun2;
