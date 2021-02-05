/* eslint-disable no-unused-vars */
/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-05-28 15:13:17
 * @LastEditTime: 2020-03-21 01:30:30
 * @LastEditors: Do not edit
 * @Description:
 */

/*
        Es5

1. 理解:
除了正常运行模式(混杂模式)，ES5添加了第二种运行模式："严格模式"（strict mode）。
* 顾名思义，这种模式使得Javascript在更严格的语法条件下运行
2.  目的/作用
* 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
* 消除代码运行的一些不安全之处，为代码的安全运行保驾护航
* 为未来新版本的Javascript做好铺垫
3. 使用
* 在全局或函数的第一条语句定义为: 'use strict';
* 如果浏览器不支持, 只解析为一条简单的语句, 没有任何副作用
4. 语法和行为改变
* 必须用var声明变量
* 禁止自定义的函数中的this指向window
* 创建eval作用域
* 对象不能有重名的属性
*/
/*
    es6
let
    1. 作用:
    * 与var类似, 用于声明一个变量
    2. 特点:
    * 在let命令所在块作用域内有效
    * 不能重复声明
    * 不会预处理, 不存在提升
    * iife不再不要
    3. 应用:
    * 循环遍历加监听
    * 使用let取代var是趋势
        作用域:
    ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。
    ES6 规定，块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可引用。

    允许在块级作用域内声明函数。
    函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
    同时，函数声明还会提升到所在的块级作用域的头部。
    注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。
    考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

const

1. 作用:
  * 定义一个常量
2. 特点:
  * 不能修改
  * 其它特点同let
3. 应用:
  * 保存不用改变的数据
  const实际上保证的，并不是变量的值不得改动，
  而是变量指向的那个内存地址所保存的数据不得改动。
  对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，
  因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，
  保存的只是一个指向实际数据的指针，
  const只能保证这个指针是固定的（即总是指向另一个固定的地址），
  至于它指向的数据结构是不是可变的，就完全不能控制了。
  因此，将一个对象声明为常量必须非常小心。
  const foo = {};

  如果真的想将对象冻结，应该使用Object.freeze方法。

const foo = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
上面代码中，常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。

除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。

var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};

*/
// console.log(username)//不会预处理,不存在变量提升
let username1 = 'kobe';
// let username='wade' 不能重复声明
// * 因为let有自己的块作用域  所以写循环绑定事件时不需要闭包
// * @type {HTMLCollectionOf<HTMLElementTagNameMap[string]>}

let btns = document.getElementsByTagName('button');
for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.onclick = function () {
        alert(i);
    };
}
