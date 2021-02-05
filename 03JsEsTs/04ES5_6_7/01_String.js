/* eslint-disable no-bitwise */
/* eslint-disable no-console */
/* eslint-disable strict */
/* eslint-disable no-unused-expressions */
/*
es5
    //str.length;
    // charAt 返回指定位置的字符
    // charCodeAt 返回值定位置字符的Unicode编码
    // fromCharCode 根据字符编码获取字符
    // fromCodePoint 同上,但是能识别大于0xffff的码点
    // concat 连接多个字符串
    // indexof 没有返回-1  第二个参数:从这个index(包含)后面开始找
    // lastindexof 倒着找
    // search 返回指定内容的第一次index 否则-1  或检索与正则表达式相匹配的子字符串。
    // 优先使用slice 截取指定内容 不影响 返回新str  [开始,结束) 省略二参则至尾部  参负数倒算 一参大于二参则反空字符串
    // substring 截取字符串 [开始,结束)  不影响 返回新str  省略二参则至尾部 参负自动转为0  一参大于二参则自动调换位置
    // substr 截取字符串 [开始,长度 省二参则至尾部 一参负倒计算二参负反空串
    // split 拆分    成数组
    // trim 前后  该方法去除的不仅是空格，还包括制表符（\t、\v）、换行符（\n）和回车符（\r）。
    // touppserCase 大写
    // toLowerCase 全部转为小写
    // match  .index .input
    // replace
    // search

es6模板字符串 : 简化字符串的拼接
    模板字符串必须用 `` tab的上键包含
    变化的部分使用${xxx}定义
    let obj = { username: 'kobe', age: 30 };
    let str = `我得名字叫:${obj.username},我今年的年龄是${obj.age}`;
    str = `http://www.baidu.com/login.do?name=${obj.username}`;


es6
    // String.raw() 模板字符串中的\变成\\
    // charCodeAt() 正确处理4个字节存储的字符
    // normalize unicode正规化  原字符和重音符号合成  欧洲语言的特有符号
    // includes()：返回布尔值，表示是否找到了参数字符串。
    // startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    // endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
    // repeat方法返回一个新字符串，表示将原字符串重复n次。

es8
    // ES2017 引入了字符串补全长度的功能。
    // 如果某个字符串不够指定长度，会在头部或尾部补全。
    // padStart()用于头部补全，padEnd()用于尾部补全。

es10
    console.log(' abc '.trim());
    console.log(' abc '.trimStart());
    console.log(' abc '.trimEnd());
    console.log('====================================');
    // matchAll()方法返回一个正则表达式在当前字符串的所有匹配

常用:
    // 1.驼峰字符串格式化fromCamelCase\
    // 2.是否为绝对地址isAbsoluteURL
    // 3.RGB颜色转16进制颜色RGBToHex




 */


/* 数据结构 */
// 其他转string  .toString() String(其他)
null.toString();// 报错  null undifined没有
String(null);// null/undifined => "null"/"undifined"

/*
  常用
*/
// 1.驼峰字符串格式化fromCamelCase
const fromCamelCase = (str, separator = '_') =>str.replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2').replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2').toLowerCase();
fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
fromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'
fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
// 2.是否为绝对地址isAbsoluteURL
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

isAbsoluteURL('https://google.com'); // true
isAbsoluteURL('ftp://www.myserver.net'); // true
isAbsoluteURL('/foo/bar'); // false
// 3.RGB颜色转16进制颜色RGBToHex
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
console.log(RGBToHex(255, 165, 1));

/*
    ES5及之前
    */
const str = 'str';
str.length;
// charAt 返回指定位置的字符
str.charAt(0);
// charCodeAt 返回值定位置字符的Unicode编码
str.charCodeAt(0);
// fromCharCode 根据字符编码获取字符
console.log(String.fromCharCode(0x2692));
// fromCodePoint 同上,但是能识别大于0xffff的码点
console.log(String.fromCodePoint(0x112));
// concat 连接多个字符串
console.log('前'.concat('后'));

// indexof 没有返回-1  第二个参数:从这个index(包含)后面开始找
console.log('123'.indexOf(1, 2), '123'.indexOf(4));
// lastindexof 倒着找
console.log('123'.lastIndexOf('1'), '123'.lastIndexOf('4'));
// search 返回指定内容的第一次index 否则-1  或检索与正则表达式相匹配的子字符串。
console.log('123'.search('12'));

/* 优先使用slice */
// slice 截取指定内容 不影响 返回新str  [开始,结束) 省略二参则至尾部  参负数倒算 一参大于二参则反空字符串
console.log('JavaScript'.slice(0, 4));// "Java"
// substring 截取字符串 [开始,结束)  不影响 返回新str  省略二参则至尾部 参负自动转为0  一参大于二参则自动调换位置
console.log('123'.substring(1, 3));

// substr 截取字符串 [开始,长度 省二参则至尾部 一参负倒计算二参负反空串
str.substr(0, 3);
// split 拆分    成数组
console.log('abcde'.split('d')); // d没有了

// trim 前后  该方法去除的不仅是空格，还包括制表符（\t、\v）、换行符（\n）和回车符（\r）。
// touppserCase 大写
// toLowerCase 全部转为小写

// match  .index .input
// replace
// search

/* localeCompare方法用于比较两个字符串。它返回一个整数，如果小于0，表示第一个字符串小于第二个字符串；
  如果等于0，表示两者相等；如果大于0，表示第一个字符串大于第二个字符串。
  但是，localeCompare方法会考虑自然语言的排序情况，将B排在a的前面。
  */

/*
  ES6
  */
// String.raw() 模板字符串中的\变成\\
// charCodeAt() 正确处理4个字节存储的字符
let s = '𠮷a';
console.log(String.fromCharCode(0x20bb7));
s.codePointAt(0); // 134071
// normalize unicode正规化  原字符和重音符号合成  欧洲语言的特有符号
console.log('u01D1'.normalize() === '\u004F\u030C'.normalize);
// includes()：返回布尔值，表示是否找到了参数字符串。
// startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
// repeat方法返回一个新字符串，表示将原字符串重复n次。
'na'.repeat(2.9); // 小数向下取整
'na'.repeat(NaN); // ''


/*
  ES8
  */
// ES2017 引入了字符串补全长度的功能。
// 如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全。
console.log('123'); // 未实装

/*
  ES10
  */
console.log('====================================');
console.log(' abc '.trim());
console.log(' abc '.trimStart());
console.log(' abc '.trimEnd());
console.log('====================================');
// matchAll()方法返回一个正则表达式在当前字符串的所有匹配
