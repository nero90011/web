/* eslint-disable */
/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-03-31 20:47:19
 * @LastEditTime: 2020-04-10 16:56:33
 * @LastEditors: Do not edit
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// 引入vuetify需要在
new Vue({
 router,
 store,
 vuetify,
 render: h => h(App)
}).$mount('#app')