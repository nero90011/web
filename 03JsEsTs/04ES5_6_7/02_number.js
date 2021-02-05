/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-05-28 15:13:17
 * @LastEditTime: 2020-03-21 00:25:40
 * @LastEditors: Do not edit
 * @Description:
 */

/*
  常用
*/
// 1. 将数字转化为千分位格式:
const toDecimalMark = num => num.toLocaleString('en-US');
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
// 2. 将Number转换为String  如果数组包含字符串，字符串原样保留。 这也可以用于将String元素转换为Number类型：
const stringArray = numberArray.map(String);
const stringArray1 = [1, 2, 3].map(Number);
// 3. 反2
const numberArray = stringArray.map(Number);
const stringArray2 = ['1', '2', '3'].map(String);

/*
  es5写法:
    parseInt()  //全局
  es6写法:
    Number.parseInt()  //Number对象的
  目的:逐步减少全局性的方法,使得语言逐步模块化
     Number.parseInt === parseInt //true


1. 二进制与八进制数值表示法: 二进制用0b, 八进制用0o
2. Number.isFinite(i) : 判断是否是有限大的数
3. Number.isNaN(i) : 判断是否是NaN
4. Number.isInteger(i) : 判断是否是整数
5. Number.parseInt(str) : 将字符串转换为对应的数值
   Number.parseFloat('123.45*')//123.45
   Number.isInteger(number)//只有number才会为true 且 数值精度最多可达到53个二进制位
6.设置能够接受的误差范围
  Number.EPSILON ===Math.pow(2.-52)
  5.551115123125783e-17 < Number.EPSILON * Math.pow(2, 2)

  安全整数:
    Number.MAX(MIN)_SAFE_INTEGER  JS能够精确表示的极限
    Number.isSafeInteger(计算式或number) //安全则返回true
6. Math.trunc(i) : 直接去除小数部分
   Math.sign()


7. .toString(2)  (10).toString(2) 10['toString'](8) //必须有括号 转化为2进制或者 8 16
    (1010).parseInt  将其他进制转化回10进制
8. (10).toFiexed(2) //"10.00" 添加小数位或去除小数位
    10.006.toFiexed(2)//"10.01"  //小数5的四舍五入是不确定的
9. (10).toExponential(小数点后有效数字的位数0-20 超出报错) //"1e+1"
10 自定义方法:Number.prototype.add =function (x) {return this+x;};

11.Number数组转为String元素
const stringArray=numberArray.map(String);

*/
/*
ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
0b111110111 === 503 // true
0o767 === 503 // true
从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示。
如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法。
Number('0b111')  // 7
Number('0o10')  // 8
 */
