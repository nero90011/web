
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 14:24:14
 * @LastEditTime: 2019-09-17 13:06:04
 * @LastEditors: Do not edit
 * @Description: 函数柯里化解决纯函数扩展性差的问题
 */

/*
  柯里化:传递给函数一部分的参数来调用他
    让他返回一个函数去处理剩下的参数
  本质:事实上柯里化是一种预加载函数的方法,通过传递比较少的参数
    得到一个已经记住了这些参数的新函数,某种意义上讲,是对参数的缓存,是一种非常高效的编写函数的方法
  缺点:函数嵌套时,可能会有包菜式代码
  解决:使用函数组合来解决函数嵌套
  特点:()()()()
*/
import { curry } from 'lodash';
// 解决01中的checkage扩展性 问题
const checkage = min =>(age=> age > min);
console.log(checkage(18)(20));
// 例子2: 判断是否有空格
let match = curry((reg, str)=>str.match(reg));
let filter = curry((f, arr)=>arr.filter(f));
console.log(match(/\s+/g)('fff fff'));
console.log(filter(match(/\s+/g), ['abcdfg', 'hello World']));
//
