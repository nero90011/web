/* eslint-disable strict */
/* eslint-disable max-len */
/* eslint-disable no-console */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-08-20 12:05:10
 * @LastEditTime: 2019-09-16 11:20:11
 * @LastEditors: Do not edit
 * @Description:
 */
/* 常用 */
// 1.获取两个日期相差天数
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9


/**
 *Date
 * 1.介绍javaScript原生事件库,易国建标准时间UTC为标准
 *      可以表示的时间范围是前后各一亿天
 * 2.普通函数用法:
 *
 */
console.log(Date());// Tue Aug 20 2019 12:11:32 GMT+0800 (GMT+08:00)
console.log(2000, 1, 1);// 2000 1 1
/**
 * 3.构造函数的用法
    下面的返回值都相同Fri Feb 15 2013 00:00:00 GMT+0800 (CST)
    new Date('2013-2-15');
    new Date('2013/2/15');
    new Date('02/15/2013');
    new Date('2013-FEB-15');
    new Date('FEB, 15, 2013');
    new Date('FEB 15, 2013');
    new Date('February, 15, 2013');
    new Date('February 15, 2013');
    new Date('15 Feb 2013');
    new Date('15, February, 2013');

    参数规定: 念书为年月日等多个整数时,年和月不能省略
            如果只有年这一参数(而没有月,尽管有其他参数)
            Date会将其解释为毫秒数
            可以使用负数,表示扣去的事件

    取值范围:
      // 年：使用四位数年份，比如2000。如果写成两位数或个位数，则加上1900，即10代表1910年。如果是负数，表示公元前。
      // 月：0表示一月，依次类推，11表示12月。
      // 日：1到31。
      // 小时：0到23。
      // 分钟：0到59。
      // 秒：0到59
      // 毫秒：0到999。
      // 注意，月份从0开始计算，但是，天数从1开始计算。另外，除了日期的默认值为1，小时、分钟、秒钟和毫秒的默认值都是0。
      // 这些参数如果超出了正常范围，会被自动折算。比如，如果月设为15，就折算为下一年的4月。

 */
console.log(new Date());// 2019-08-20T04:13:03.993Z
console.log(new Date(1378218728000));
console.log(new Date(Date.now()));
console.log(new Date('January 6, 2013'));
console.log(new Date(2013, 0, 1, 0, 0, 0, 0));
console.log(new Date(-1378218728000));
console.log(new Date(2013.0 - 1));// 负数  Sat Dec 01 2012 00:00:00 GMT+0800 (CST)
console.log(new Date(2013, 0, 0));// 上面代码的第二个例子，日期设为0，就代表上个月的最后一天。
/**
 * 4.类型自动转换时，
 *  Date实例如果转为数值，则等于对应的毫秒数；
 *  如果转为字符串，则等于对应的日期字符串。
 *  两个日期实例对象进行减法运算时返回的是它们间隔的毫秒数；
 *  进行加法运算时，返回的是两个字符串连接而成的新字符串。
 */
const d1 = new Date(2000, 2, 1);
const d2 = new Date(2000, 3, 1);

console.log(d2 - d1);// 2678400000
console.log(d2 + d1);// "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)"
/**
 * 5.静态方法
 *  parse可以解析的:
 *    Date.parse('Aug 9, 1995');
      Date.parse('January 26, 2011 13:51:50');
      Date.parse('Mon, 25 Dec 1995 13:30:00 GMT');
      Date.parse('Mon, 25 Dec 1995 13:30:00 +0430');
      Date.parse('2011-10-10');
      Date.parse('2011-10-10T14:48:00');
    UTC格式:
      ate.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])
 */
// 返回毫秒数 的方法:
console.log(Date.now());// 返回当前事件距离事件零点的毫秒数
console.log(Date.parse('Aug 9, 1995'));// 用来解析日期字符串，返回该时间距离时间零点（1970年1月1日 00:00:00）的毫秒数,解析失败返回NaN
console.log(Date.UTC(2011, 0, 1, 2, 3, 4, 567));// 接受年、月、日等变量作为参数，返回该时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数。
/**
 * 6.实例的方法
 *  valueOf toString
 *  Locale系列方法参数:([locales[, options]])
 *  locales是一个指定所用语言的字符串，options是一个配置对象
 *  d.toLocaleTimeString('en-US', {
      timeZone: 'Asia/Shanghai',
      timeZoneName: 'long',
      });
      // "12:00:00 AM China Standard Time"

      // 小时周期为12还是24
      d.toLocaleTimeString('en-US', {
        hour12: false,
      });
      // "00:00:00"

      d.toLocaleTimeString('en-US', {
        hour12: true,
      });
      // "12:00:00 AM"
 */
const now = new Date(Date.now());
console.log(now);
console.log(now.valueOf());// 转成毫秒数 返回实例对象距离时间零点（1970年1月1日00:00:00 UTC）对应的毫秒数，该方法等同于getTime方法。
console.log(now.getTime());// 同上

console.log(now.toString());// 转成字符串 返回一个完整的日期字符串
console.log(now.toJSON());// 返回一个符合 JSON 格式的 ISO 日期字符串，与toISOString方法的返回结果完全相同。
console.log(now.toDateString());// 返回日期字符串（不含小时、分和秒）。
console.log(now.toTimeString());// 返回时间字符串（不含年月日）。
console.log(now.toLocaleString('zh-CN'));// 本地完整时间
console.log(now.toLocaleDateString('en-US', { // "Tuesday, January 1, 2013"
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}));// 本地日期（不含小时、分和秒）
console.log(now.toLocaleTimwString('en-US', { // "4:00:00 PM UTC"
    timeZone: 'UTC',
    timeZoneName: 'short'
}));// 本地时间（不含年月日）。
// 中文版浏览器为"2013年1月1日 上午12:00:00"
// 英文版浏览器为"1/1/2013 12:00:00 AM"

console.log(now.toUTCString());// 返回对应的 UTC 时间，也就是比北京时间晚8个小时。
console.log(now.toISOString());// 返回对应时间的 ISO8601 写法。总是返回UTC时区的时间

// get系列
/*
  当前时区时间
  getTime();// ：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
  getDate();// ：返回实例对象对应每个月的几号（从1开始）。
  getDay();// ：返回星期几，星期日为0，星期一为1，以此类推。
  getFullYear();// ：返回四位的年份。
  getMonth();// ：返回月份（0表示1月，11表示12月）。
  getHours();// ：返回小时（0-23）。
  getMilliseconds();// ：返回毫秒（0-999）。
  getMinutes();// ：返回分钟（0-59）。
  getSeconds();// ：返回秒（0-59）。
  getTimezoneOffset();// ：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。
  // 所有这些get*方法返回的都是整数，不同方法返回值的范围不一样。


  UTC时间
  getUTCDate();
  getUTCFullYear();
  getUTCMonth();
  getUTCDay();
  getUTCHours();
  getUTCMinutes();
  getUTCSeconds();
  getUTCMilliseconds();
*/
console.log(now.getTime());
console.log(now.getDate());

// set系列方法
// setDate(date);// ：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
// setFullYear(year [, month, date]);//：设置四位年份。
// setHours(hour [, min, sec, ms]);//：设置小时（0-23）。
// setMilliseconds();// ：设置毫秒（0-999）。
// setMinutes(min [, sec, ms])//：设置分钟（0-59）。
// setMonth(month [, date])//：设置月份（0-11）。
// setSeconds(sec [, ms])//：设置秒（0-59）。
// setTime(milliseconds);// ：设置毫秒时间戳。
// 这些方法基本是跟get*方法一一对应的，但是没有setDay方法，因为星期几是计算出来的，而不是设置的。另外，需要注意的是，凡是涉及到设置月份，都是从0开始算的，即0是1月，11是12月。
/*  setUTCDate();
    setUTCFullYear();
    setUTCHours();
    setUTCMilliseconds();
    setUTCMinutes();
    setUTCMonth();
    setUTCSeconds();
*/
