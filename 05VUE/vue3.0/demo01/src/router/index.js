import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '01声明',
    component: () => import(/* webpackChunkName: "about" */ '../views/01声明.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
