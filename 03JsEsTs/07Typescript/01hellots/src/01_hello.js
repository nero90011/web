/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-07-23 11:16:10
 * @LastEditTime: 2020-03-06 18:18:13
 * @LastEditors: Do not edit
 * @Description:
 */
/**
 * 1..ts后缀 普通ts文件 用ts编写react时,使用.tsx为后缀
 * 2.编译方法:tsc 文件名.ts   生成一个编译好的文件 hello.js
 * 3.vscide 内置了ts支持 它本身使用typescript编写
 * 4.使用 : 指定变量的类型，: 的前后有没有空格都可以。
 * 5.TypeScript 编译的时候即使报错了，还是会生成编译结果,如果不配置tsconfig.json的话
 */
function sayHello(person) {
    return 'hello,' + person;
}
var user = 'Jane User';
console.log(sayHello(user));
