/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-12 12:54:30
 * @LastEditTime: 2020-04-26 18:35:38
 * @LastEditors: Do not edit
 * @Description:
 */
import { Middleware } from '@nuxt/types'

const redirect: Middleware = ({ isHMR, app, store, route, redirect }) => {
    if (isHMR) return
    /**
     * @name: 需要重定向的路由
     * @param {type}
     * @return:
     */
    // if (route.fullPath == '/main') {
    //     return redirect('/main/nowplaying')
    // }
    /**
     * @name:如果已经登录 不能访问的路由 重定向到 main
     * @param {type}
     * @return:
     */
    if (store.state.auth.loggedIn) {
        const path = ['/auth/login', '/auth/register']
        if (path.includes(route.fullPath)) {
            return redirect('/main')
        }
    }
    /**
     * @name:rbac 如果pid!==3 不能访问shoper
     * @param {type}
     * @return:
     */
    if (store.state.auth.loggedIn) {
        if (store.state.auth.user.pid!==3) {
            const path = ['/shoper','/shoper/baby','/shoper/order','/shoper/assess']
            if (path.includes(route.fullPath)) {
                return redirect('/main')
            }
        }
    }
}
export default redirect
