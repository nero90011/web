/* eslint-disable */
/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-03-31 20:47:19
 * @LastEditTime: 2020-04-11 14:34:01
 * @LastEditors: Do not edit
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
      name:'index',
      path:'/',
      redirect:'/movieapp/center',
      component:()=>import(/* webpackChunkName: "group-index" */'../views/Index.vue'),
      children:[
        {
            path: "/study/test1",
            name: "test1",
            component: () =>
              import(/* webpackChunkName: 'test' */ "../views/study/01tets.vue"),
          },
          {
            path: "/study/gwc",
            name: "gwc",
            component: () => import(/* webpackChunkName: 'test' */ "../views/study/Gwc.vue"),
          },
          {
            path: "/study/fetch",
            name: "fetch",
            component: () =>
              import(/* webpackChunkName: 'http' */ "../views/study/Fetch.vue"),
          },
          {
            path: "/study/Axios",
            name: "Axios",
            component: () =>
              import(/* webpackChunkName: 'http' */ "../views/study/Axios.vue"),
          },
          {
            path: "/study/component01",
            name: "component01",
            component: () =>
              import(/*webpackChunkName:'component' */ "../views/study/Component01.vue"),
          },
          {
            path: "/study/leftbar",
            name: "leftbar",
            component: () =>
              import(/*webpackChunkName:'component' */ "../views/study/LeftBar.vue"),
          },
          {
            path: "/study/sjzx",
            name: "sjzx",
            component: () =>
              import(/*webpackChunkName:'component' */ "../views/study/事件总线.vue"),
          },
          {
            path: "/study/dtzj",
            name: "dtzj",
            component: () =>
              import(/*webpackChunkName:'component' */ "../views/study/动态组件.vue"),
          },
          {
            path: "/study/slot",
            name: "slot",
            component: () => import(/* webpackChunkName:'slot' */ "../views/study/Slot.vue"),
          },
          {
            path: "/study/slotbar",
            name: "slotbar",
            component: () => import(/* webpackChunkName:'slot' */ "../views/study/SlotBar.vue"),
          },
          {
            path: "/study/animate",
            name: "animate",
            component: () => import(/* webpackChunkName:'animate' */ "../views/study/Animate.vue"),
          },
          {
            path: "/study/vuex",
            name: "vuex",
            component: () => import(/* webpackChunkName:'animate' */ "../views/study/Vuex.vue"),
          },
          {
            path: "/movieapp/Center",
            name: "Center",
            component: () => import(/* webpackChunkName:'movieapp' */ "../views/movieApp/Center.vue"),
          },
          {
            path: "/movieapp/Cinema",
            name: "Cinema",
            component: () => import(/* webpackChunkName:'movieapp' */ "../views/movieApp/Cinema.vue"),
          },
          {
            path: "/movieapp/Film",
            name: "Film",
            component: () => import(/* webpackChunkName:'movieapp' */ "../views/movieApp/Film.vue"),
          },
          {
            // 动态路由
            path: "/movieapp/Detail/:id",
            name: "Detail",
            component: () => import(/* webpackChunkName:'movieapp' */ "../views/movieApp/Detail.vue"),
          },
          {   // 防止有人输入detail不加id
              path:'*',
              redirect:'/movieapp/Film'
          },
      ]
  }
];

const router = new VueRouter({
  routes,
  //模式分为3中  hash:前端路由带# history:后端路由缺点会向后端真正请求
  mode:'hash'
});
/**
 * @name: 全局路由守卫
 * @msg:
 * @Description: 不设置会拦截所有守卫
 * @param {type}
 * @return:
 */
router.beforeEach((to:any, from:any, next:any) => {
  if (to.path === "/movieapp/Center") {
    console.log("盘查");
    if ("此时已经登录") {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
