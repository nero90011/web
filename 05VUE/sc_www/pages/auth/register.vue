<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-16 10:59:03
 * @LastEditTime: 2020-04-30 21:02:00
 * @LastEditors: Do not edit
 * @Description: 注册页面
 -->
<template lang="pug">
v-container( fluid)
    v-row
        v-btn(class="ml-1" outlined icon @click="routerGoBack") 
            v-icon(v-text="'mdi-arrow-left'" )
    v-row(justify="center" align="center" class="mt-11")
        v-col
            v-form( @submit.prevent="doRegister" v-model="valid")
                v-text-field(
                    label="用户名" v-model="register.rusername"  
                    outlined  dense prepend-inner-icon="mdi-human-male"  counter="20"
                    :rules="[rules.required,rules.nameminmax]"
                    autocomplete="off"
                )
                v-text-field(label="密码" type="password"  
                    v-model="register.rpwd"  class="my-2"
                    outlined  dense prepend-inner-icon="mdi-lock"
                    :append-icon="passwordIsShow ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordIsShow = !passwordIsShow" 
                    :type="passwordIsShow ? 'text' : 'password'"
                    :rules="[rules.required, rules.passminmax]" hint="最少8位"
                )
                v-text-field(label="确认密码" type="password"  
                    v-model="register.reppwd"  class="my-2"
                    outlined  dense prepend-inner-icon="mdi-lock"
                    :append-icon="passwordIsShow ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="passwordIsShow = !passwordIsShow" 
                    :type="passwordIsShow ? 'text' : 'password'"
                    :rules="[rules.required, rules.equalaspass]" hint="最少8位"
                )
                v-text-field(
                    label="手机" v-model="register.rphone"  
                    outlined  dense prepend-inner-icon="mdi-phone" clearable counter="11"
                    :rules="[rules.required,rules.isphone]"
                )
                v-row(align="center" justify="center" class="mt-n6")
                    v-col(align="start")
                        v-dialog( v-model="isShowServiceDialog" )
                            template(v-slot:activator="{on}" )
                                v-btn( v-on="on" color="success" class="noborder"  outlined shaped ) 服务须知
                            v-card(  )
                                v-card-title 如果您创建了用户表明您同意以下须知:
                                v-card-text(v-text="serviceinfo" )
                                v-card-actions()
                                    v-row(justify="center" align="center")
                                        v-btn( @click="isShowServiceDialog=!isShowServiceDialog" color="success" outlined shaped) 我同意
                    v-col(align="end")
                        v-checkbox(
                            label="成为店家" 
                            dense color="success"
                            append-icon="mdi-store"
                            class="px-4"
                            v-model="beshopper" 
                        )
                v-row(align="center" justify="center")
                    v-btn( type="submit" color="success"  outlined shaped width="93%" :disabled="!valid") 注册
</template>
<script lang='ts'>
import { Component, Vue ,Watch} from 'nuxt-property-decorator'
import { SERVICE } from '../../data/service';

@Component({
    layout: 'nothing',
})
export default class Register extends Vue {
    // 注册信息
    private serviceinfo:string=SERVICE
    private beshopper:boolean=false
    private register: any = {
        rusername: '',
        rpwd: '',
        reppwd: '',
        rphone: '',
        rpid: '2',
    }
    // 是否显示密码
    private passwordIsShow: boolean = false
    // 是否显示 服务通知dialog
    private isShowServiceDialog:boolean=false
    // 提交按钮是否可用
    private valid: boolean = true
    // 表单规则
    private rules: Object = {
        required: (v: any) => !!v || '不能为空',
        nameminmax: (v: any) => (v.length >= 4 && v.length <= 20) || '用户名长度为4-20',
        passminmax: (v: any) => (v.length >= 8 && v.length <= 25) || '密码长度为8-25',
        equalaspass: (v: any) => v === this.register.rpwd || '两次密码不一致',
        isphone: (v: any) => (v.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(v)) || '请输入正确的手机号',
    }
    /* __________________________watch___________________________________ */
    @Watch('beshopper')
    beshopperChange(){
        this.register.rpid=this.beshopper?'3':'2'
    }
    /* ___________________________计算属性________________________________ */
    /* __________________________事件____________________________________ */
    /**
     * @name: 返回之前的url
     * @param {type}
     * @return:
     */
    private routerGoBack() {
        const that = this as any
        that['$router'].back()
    }
    /**
     * @name: 注册
     * @param {type}
     * @return:
     */
    private async doRegister() {
        const that = this as any
        // register phone转number 不用转
        // this.register.rphone = +this.register.rphone // 或者 Number() 如不能转为数字则返回 isNaN
        const { data } = await that['$axios'].post('/api/user/register', this.register)
        console.log(data.code)
        if (data.code === 200) {
            //跳转登录界面
            that['$router'].push('/auth/login')
            //将新用户信息填写好
        } else {
            //提醒创建失败的原因
            that['$toast'].show(data.msg, {
                theme: 'outline',
                position: 'top-center',
                duration: 1500,
                type: 'error',
            })
            //不进行任何跳转
        }
    }
}
</script>
<style scoped lang="scss">
.noborder{
    border: none;
}

</style>