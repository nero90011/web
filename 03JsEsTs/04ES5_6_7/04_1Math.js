/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-09 14:00:51
 * @LastEditTime: 2019-09-16 10:51:43
 * @LastEditors: Do not edit
 * @Description:
 */
/**
 *  Math.E：常数e。
    Math.LN2：2 的自然对数。
    Math.LN10：10 的自然对数。
    Math.LOG2E：以 2 为底的e的对数。
    Math.LOG10E：以 10 为底的e的对数。
    Math.PI：常数π。
    Math.SQRT1_2：0.5 的平方根。
    Math.SQRT2：2 的平方根。

    Math.abs()：绝对值
    Math.ceil()：向上取整 Math.floor()：向下取整
    Math.max()：最大值    Math.min()：最小值
    Math.pow()：指数运算
    Math.sqrt()：平方根
    Math.log()：自然对数
    Math.exp()：e的指数
    Math.round()：四舍五入
    Math.random()：随机数

    Math.trunc方法用于去除一个数的小数部分，返回整数部分。
    Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
    Math.cbrt方法用于计算一个数的立方根。
    Math.clz32()方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0。
    Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
    Math.fround方法返回一个数的32位单精度浮点数形式。
    Math.hypot方法返回所有参数的平方和的平方根。
    Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1。
    Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。
    Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。
    Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。


    Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

    ES2016 新增了一个指数运算符（**）。
    */
// 常用1:随机生成六位数组验证码
let code;
code = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
console.log(code);
//
