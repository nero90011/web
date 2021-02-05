/* eslint-disable no-console */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 17:06:24
 * @LastEditTime: 2019-09-17 13:22:45
 * @LastEditors: Do not edit
 * @Description:无值,不使用所要处理的值,只合成运算过程
 */
/*
  这种风格能够帮助我们减少不必要的命名，
  让代码保持简洁和通用。
  当然，为了在一些函数中写出Point Free的风格，
  在代码的其它地方必然是不那么Point Free的，
  这个地方需要自己取舍。
*/
import { curry } from 'lodash';

const compose = (f, g)=>((x)=>f(g(x)));
// no point free
const f = str=>str.toUpperCase().split('');
// point free
let toUpperCase = word =>word.toUpperCase();
let split = x=>(str=>str.split(x));

let f1 = compose(split(''), toUpperCase);
console.log(f1('abcd efgh'));
/*
  本质就是使用一些通用的函数，组合出各种复杂运算。
  上层运算不要直接操作数据，而是通过底层函数去处理。
  这就要求，将一些常用的操作封装成函数。
*/
/**
 * 一个合成函数,定义它的时候,根本不需要提到要处理的值
    不需要用到代表数据的那个参数，只要把一些简单的运算步骤合成在一起即可。
 */
// 举例2 读取对象的某个符合要求的属性
const objarr = [{
    name: 'dante',
    value: 'asd'
}, {
    name: 'nero',
    value: 'zxc'
}];
let val = curry((key, obj)=>obj[key]);// 获取值
let option = (opt)=>opt === 'asd';// 要求函数
let filter = curry((fun, arr)=>arr.filter(fun));
let getASD = filter(compose(option, val('value')));
console.log(getASD(objarr));
