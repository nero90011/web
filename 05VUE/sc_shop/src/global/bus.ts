/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 20:00:54
 * @LastEditTime: 2020-04-06 20:03:27
 * @LastEditors: Do not edit
 * @Description: 全局事件总线
 */
/* eslint-disable */
import Vue from 'vue'
//局部总线
export const notGlobalBus=new Vue()
//全局总线
Vue.prototype.$globalBus=new Vue();
