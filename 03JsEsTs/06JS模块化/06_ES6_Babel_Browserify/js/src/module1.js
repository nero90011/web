/* jshint esversion:6 */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-12 12:42:23
 * @LastEditTime: 2019-08-06 16:47:36
 * @LastEditors: Do not edit
 * @Description: 
 */
//分别暴露
export function foo(){
    console.log('module1 foo()');
}

export function bar() {
    console.log('module1 bar()');
}

export const DATA_ARR=[1,3,5,1];

let m=1;
export {m};


