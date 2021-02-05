<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-15 23:53:23
 * @LastEditTime: 2020-04-30 21:01:51
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
v-container( fluid)
    v-row
        v-btn(class="ml-1 noborder" outlined icon @click="routerGoBack") 
            v-icon(v-text="'mdi-arrow-left'" )
    v-row(justify="center" align="center" class="mt-11")
        v-col
            v-form( @submit.prevent="login" v-model="valid" )
                v-text-field(
                    label="用户名" v-model="loginModel.lusername"  
                    outlined  dense prepend-inner-icon="mdi-human-male" clearable counter="20"
                    :rules="[rules.required]"
                )
                v-text-field(label="密码" type="password"  
                    v-model="loginModel.lpassword"  class="my-2"
                    outlined  dense prepend-inner-icon="mdi-lock"
                    :append-icon="passwordIsShow ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordIsShow = !passwordIsShow" 
                    :type="passwordIsShow ? 'text' : 'password'"
                    :rules="[rules.required, rules.min]" hint="最少8位"
                )
                v-row(align="center" justify="center")
                    v-btn( class="mr-6" to="/auth/register" outlined shaped :disabled="valid") 注册
                    v-btn( color="success" type="submit"  outlined shaped :disabled="!valid") 登录
        
</template>
<script lang='ts'>
import { Component, Vue, State } from 'nuxt-property-decorator'

@Component({
})
export default class Login extends Vue {
    @State loggedIn!:boolean
    private passwordIsShow: boolean = false
    private rules: Object = {
        required: (value: boolean | string) => !!value || '不能为空',
        min: (v: any) => v.length >= 8 || '最少8位',
        emailMatch: () => "The email and password you entered don't match",
    }
    private loginModel: Object = {
        lusername: '',
        lpassword: '',
    }
    // 提交按钮是否可用
    private valid: boolean = true

    /**
     * @name: 返回上一级
     * @param {type}
     * @return:
     */
    routerGoBack() {
        const that = this as any
        that['$router'].back()
    }
    /**
     * @name: 登录
     * @param {type}
     * @return:
     */
    async login() {
        const that = this as any
        await that['$auth'].loginWith('local', {
            data: this.loginModel,
        })
    }
    /* _________________________________nuxt生命周期 */
    layout(){
        return 'nothing'
    }
}
</script>
<style scoped lang="scss">
.my-alcenter {
    position: absolute;
    top: 40%;
    left: 53%;
    transform: translate(-50%, -50%);
}
.noborder{
    border: none;
}
</style>