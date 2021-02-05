/* eslint-disable func-names */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 12:35:29
 * @LastEditTime: 2019-09-16 12:41:29
 * @LastEditors: Do not edit
 * @Description: 面向对象编程之switch..case
 */
// 原
/* 在每一个case的最后一行必须是break语句，
否则会接着运行下一个case。这样不仅容易忘记，
还会造成代码的冗长。
而且，switch...case不使用大括号，不利于代码形式的统一。
此外，这种结构类似于goto语句，容易造成程序流程的混乱，
使得代码结构混乱不堪，不符合面向对象编程的原则。
 */
function doAction(action) {
    switch (action) {
    case 'hack':
        return 'hack';
    case 'slash':
        return 'slash';
    case 'run':
        return 'run';
    default:
        throw new Error('Invalid action.');
    }
}
// 改对象结构
function doAction2(action) {
    var actions = {
        hack: function () {
            return 'hack';
        },
        slash: function () {
            return 'slash';
        },
        run: function () {
            return 'run';
        }
    };

    if (typeof actions[action] !== 'function') {
        throw new Error('Invalid action.');
    }

    return actions[action]();// 返回对应对象的key值的函数执行后的值
}
//
