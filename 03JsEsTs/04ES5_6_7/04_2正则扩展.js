/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-09 14:32:14
 * @LastEditTime: 2019-09-16 12:06:35
 * @LastEditors: Do not edit
 * @Description:
 */
// 常用正则:
// 1.身份证正则:
const IDReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
// 2.常用密码组合正则
const passwordReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,20}$/;// -长度8~20位字符，支持大小写字母、数字、符号三种字符中任意两种字符的组合

const reg = new RegExp('ab', 'i');
const result = reg.test('Ab');
/**
 * i,不区分大小写
 * g,全局 从头到尾
 */

// 字面量
const reg1 = /a/i;
reg1.test('abc');


/**
 * //|或者
//[] 内部全为或者
 * [a-z]
 * [0-9]
 */
/**
 * ab &
 * a[b,c]d :abd|acd
 * [^] 除了
 */
/**
 * (ab){1,3} ababab
 * + 至少一个
 * *0或多个
 * ?0或1个
 * ^开头
 * $结尾
 *
 */

/**
 * .//任意字符
 * \. .
 * \\ \
 * \w 字母,数字,_
 * \W 取反
 * \d 数字
 * \D 取反
 * \s 空格
 * \S 取反
 * \b 单词边界
 * \B 不是单词边界
 */

/**
 * split(正则) //不指定全局,也全拆分
 * search(正则) //只查找第一个,全局也没用 返回index
 * match(正则) //从一个自负床中将匹配的返回 ,返回字符串, 如果g  返回多个
 * replace(正则) //替换为新内容
 *
 */
let str = ' abc ';
str = str.replace(/^\s*/, '');
