/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-07-23 11:16:10
 * @LastEditTime: 2020-03-06 17:37:24
 * @LastEditors: Do not edit
 * @Description: 
 */
/**
 * 1..ts后缀 普通ts文件 用ts编写react时,使用.tsx为后缀
 * 2.编译方法:tsc 文件名.ts   生成一个编译好的文件 hello.js
 * 3.vscide 内置了ts支持 它本身使用typescript编写
 */
function sayHello(person:string) {
    return 'hello,'+person;
}
let user='Jane User';

console.log(sayHello(user));