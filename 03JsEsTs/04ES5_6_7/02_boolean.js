/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-08-19 14:16:18
 * @LastEditTime: 2020-03-21 00:24:41
 * @LastEditors: Do not edit
 * @Description:
 */
/* eslint-disable no-unused-vars */
/* eslint-disable strict */
/* eslint-disable no-console */
/*
// 2.双重否定运算符也可以将任意值转换为对应的布尔值
// Boolean 对象前加不加new 得到的结果不同
// 常用: 将变量强制转换为布尔值而不改变其值
// 常用: 删除Boolean为false的值
*/
// 1.工具方法
console.log(Boolean('false'), Boolean(''));
// 2.双重否定运算符也可以将任意值转换为对应的布尔值
console.log(!!undefined, !!0);
// Boolean 对象前加不加new 得到的结果不同

// 常用: 将变量强制转换为布尔值而不改变其值
const myBoolean = !!null;// undefined false "" 0 可以将这些全部转为false // fontVariantAlternates:
console.debug(myBoolean);
// true "string"1 {} [] //true 将这些转为true

// 常用: 删除Boolean为false的值
const clean = dirtyArray.filter(Boolean);
