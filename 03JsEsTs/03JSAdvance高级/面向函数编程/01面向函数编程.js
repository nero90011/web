/* eslint-disable strict */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 14:03:59
 * @LastEditTime: 2019-09-16 14:23:37
 * @LastEditors: Do not edit
 * @Description: 面向函数编程
 */
/*
  纯函数: 对于相同的输入,永远会得到相同的输出,而且没有任何可以观察的副作用,也不依赖外部环境的状态
    举例:slice
    反例:splice

  纯函数优点:
    有效降低系统复杂度,有很多很棒的特性:可缓存性等
  缺点:扩展性比较差
    解决:柯里化
*/
// 不纯的函数:自定义
// 原因:checkage不仅取决于输入的参数age还取决于一个外部的变量min,会造成系统复杂性大大提高
var min = 18;
var checkage = age => age > min;
// 纯函数:自定义
// 暂时的缺点:扩展性比较差后期解决:柯里化
var checkage2 = age=>age > 18;
