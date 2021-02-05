/* eslint-disable */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 12:07:01
 * @LastEditTime: 2019-09-16 12:08:03
 * @LastEditors: Do not edit
 * @Description: 常用
 */
/*
  常用
*/
// 1. 判断dom元素是否具有某个className
const hasClass = (el, className) => new RegExp(`(^|\\s)${className}(\\s|$)`).test(el.className);
