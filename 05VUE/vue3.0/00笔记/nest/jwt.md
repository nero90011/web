<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 13:55:56
 * @LastEditTime: 2020-04-14 16:28:54
 * @LastEditors: Do not edit
 * @Description: 
 -->

# jwt

## 路由守卫 需要token信息的路由

    添加:   @UseGuards(AuthGuard('jwt')) // 守卫 guard

## rbac用户角色权限控制

    nest g interceptor rbac

## JWT 的缺点

    主要是无法在使用同一账号登录的情况下，后登录的，挤掉先登录的，也就是让先前的 Token 失效，从而保证信息安全（至少我是没查到相关解决方法，如果有大神解决过该问题，还请指点），只能使用一些其他黑科技挤掉 Token
