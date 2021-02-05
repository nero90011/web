<!--
 * @Author: Nerov-i
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-16 15:18:59
 * @LastEditTime: 2020-05-01 13:59:33
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
v-container(  )
    //- 返回按钮
    v-row
        v-btn(class="ml-1 noborder" outlined icon @click="routerGoBack") 
            v-icon(v-text="'mdi-arrow-left'" )
    //- 用户头像
    v-row(align="center" justify="center" class="mt-10" )
        v-avatar( @click="setAvaDialog=!setAvaDialog" width="130" height="130")
            v-img( :src="avatarImgSrc" v-ripple)
    //- 更改头像dialog
    v-dialog(
        v-model="setAvaDialog" 
        fullscreen
        hide-overlay transition="dialog-bottom-transition"
    )   
        v-card( elevation="0"  ) 
            v-container(  )
                //- 返回按钮
                v-row
                    v-btn(class="ml-1 noborder" outlined icon @click="setAvaDialog=!setAvaDialog") 
                        v-icon(v-text="'mdi-arrow-left'" )
                //- 用户头像上传后回显
                v-row(align="center" justify="center" class="mt-10" )
                    v-avatar(width="130" height="130"    )
                        v-img(@click="inputImage" :src="backImgSrc" ref="ref-vimg" v-ripple)
                //- 更改图片的表单
                v-row(justify="center" align="center" class="mt-11")
                    v-col
                        v-row(align="center" justify="center")
                            input(@change="showImage" type="file" accept="image/*" ref="ref-input" v-show="false")
                            v-btn( @click="setAvaDialog=!setAvaDialog" class="mr-6"  outlined shaped) 取消
                            v-btn( color="success"   @click="changeUserAva"  outlined shaped ) 确认
    //- 用户名
    v-row(align="center" justify="center" class="my-2")
        p(v-text="auth.user.username" )
    //- 收货地址设置按钮
    v-row(align="center" justify="center" class="mt-10")
        v-btn( class="white" width="95%" @click="setLocationDialog=!setLocationDialog") 设置收货地址
    //- 设置收货地址dialog
    v-dialog(
        v-model="setLocationDialog" 
        fullscreen
        hide-overlay transition="dialog-bottom-transition"
    )   
        v-card( elevation="0"  ) 
            v-container(class="grey lighten-4 mb-10" class="overflow-hidden grey lighten-4"  )
                //- 返回按钮
                v-row
                    v-btn(class="ml-1 noborder" outlined icon @click="setLocationDialog=!setLocationDialog") 
                        v-icon(v-text="'mdi-arrow-left'" )
                //- 提醒设置
                v-card( elevation="0" )
                    v-card-title(class="body-1 font-weight-black") 您的收货地址:
                    v-card-text(align="center" v-text="$auth.user.location" )
                
                v-card( elevation="0" class="mt-4 py-4"  )
                    v-card-title(class="body-1 font-weight-black") 更改:
                    //- 省市区县 4级联动
                    v-row(align="center" justify="center")
                        v-region(
                            v-model="region" 
                            @values="regionChange"
                            width="95%"
                        )
                    v-row(align="center" justify="center" class="mt-5 mx-9")
                        v-text-field(
                            label ="请输入小区及楼号"
                            width="95%"
                            chip dense  outlined
                            v-model="otherRegion" 
                            :prefix="getRegionText"
                        )
                    //- 提交按钮
                    v-row(align="center" justify="center" class="mt-3")
                        v-btn( @click="setLocationDialog=!setLocationDialog" class="mr-6"  outlined shaped) 取消
                        v-btn( color="success"   @click="changeUserLocation"  outlined shaped ) 确认
    //- 退出登录按钮
    v-row(align="center" justify="center" class="mt-10")
        v-btn( @click="dialog=!dialog" class="error" width="95%" ) 退出登录
    //- 退出登录dialog
    v-dialog(
        v-model="dialog"
    )
        v-card( elevation="0"  )
            v-card-title() 是否退出登录
            v-card-actions
                v-row(align="center" justify="center")
                    v-btn( @click="dialog=!dialog" ) 取消
                    v-btn( @click="logout" class="error ml-10") 确认
    
</template>
<script lang="ts">
import { Component, Vue, State, namespace } from 'nuxt-property-decorator'

const UsersettingModule=namespace('usersetting')
@Component({
    layout: 'nothing',
    middleware: 'auth',
})
export default class Usersetting extends Vue {
    @UsersettingModule.Action setUserLocation:any
    @UsersettingModule.State showLocationDialog!:boolean
    @UsersettingModule.Mutation setshowLocationDialog:any
    /* ______________________________________普通属性______________________________________________ */
    /* vuex  auth*/
    @State readonly auth: any
    /* dialog */
    private dialog: boolean = false
    private setAvaDialog: boolean = false
    private setLocationDialog: boolean = false
    /* img */
    private backimgsrc: string = '/user.jpg'
    /* region */
    private region:any={}
    private regiontext:any={}
    private otherRegion:string=''

    /* _______________________________________计算属性_____________________________________________ */
    /**
     * @name: 设置默认图片
     * @param {type}
     * @return:
     */
    get avatarImgSrc() {
        if (this.auth.user.img) {
            //设置为auth.user.img
            return this.auth.user.img
        } else {
            //设置为默认图片
            return '/user.jpg'
        }
    }
    /**
     * @name: 使用计算属性获取 更改  回显处图片
     * @param {type}
     * @return:
     */
    get backImgSrc() {
        // this.backimgsrc=this.auth.user.img
        return this.backimgsrc
    }
    /**
     * @name: 获取前置地址
     * @param {type}
     * @return:
     */
    get getRegionText(){
        if(Object.keys(this.regiontext).length!==0&&this.regiontext.area!==null&&this.regiontext.city!==null&&this.regiontext.province!==null){
            // 顺便设置确认按钮可用
            return this.regiontext.area.value // city province town
        }else{
            // 顺便设置确认按钮不好用
            return ''
        }
    }
    /* ______________________________________普通方法______________________________________________ */
    /**
     * @name: 获取region text
     * @param {type}
     * @return:
     */
    regionChange(data:any){
        this.regiontext=data
    }
    /**
     * @name: 更改用户地址
     * @param {type}
     * @return:
     */
    async changeUserLocation(){
        const that = this as any
        if(Object.keys(this.regiontext).length!==0&&this.regiontext.area!==null&&this.regiontext.city!==null&&this.regiontext.province!==null&&this.otherRegion!==""){
            // 获取完整地址
            const resultregion=this.regiontext.province.value+this.regiontext.city.value+this.regiontext.area.value+this.otherRegion
            // axios进行更改
            await this.setUserLocation(resultregion)
            //更新 auth user(实际上是重新获取)
            await that['$auth'].fetchUser()
            // 关闭 vuex 的showSetUserLocationDialog
            await this.setshowLocationDialog(false)
            this.$router.back()
        }else{
            //提醒用户填写完整地址
            alert('请填写完整地址')
        }
    }
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
     * @name: 退出登录
     * @param {type}
     * @return:
     */
    async logout() {
        const that = this as any
        await that['$auth'].logout('local', {})
    }
    /**
     * @name: 点击图片触发input onclick事件
     * @param {type}
     * @return:
     */
    inputImage() {
        const that = this as any
        that.$refs['ref-input'].click()
    }
    /**
     * @name: 回显用户头像,等待用户确认
     * @param {type}
     * @return:
     */
    showImage(e: any) {
        const that = this as any
        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.onload = function() {
            // 使用计算属性改写 计算属性不能调用但是能 直接更改里面的返回值属性
            that.backimgsrc = fileReader.result
        }
        fileReader.readAsDataURL(file)
    }
    /**
     * @name:上传用户头像并更改用户头像url 以及 auth.user.img
     * @param {type}
     * @return:
     */
    async changeUserAva() {
        const that = this as any
        const file = that.$refs['ref-input'].files[0]
        if (!file) return console.log('文件不能为空')
        // console.log(formData.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        const formdata = new FormData()
        formdata.append('file', file, file.name)
        // formdata.append('name','file')
        const { data } = await that['$axios']({
            method: 'post',
            url: '/api/user/avator',
            headers: {
                'Content-Type': 'multipart/form-data',
                // 无需包含auth :berea token  @nuxt/auth 自动包含
            },
            data: formdata, //向表单添加数据 k:v
        })
        if (data.code === 200) {
            //更新 auth user(实际上是重新获取)
            that['$auth'].fetchUser()
            // 提醒
            that['$toast'].show(data.msg, {
                theme: 'outline',
                position: 'top-center',
                duration: 1500,
                type: 'success',
            })
            // 路由到上一级
            that['$router'].back()
        } else {
            // 提醒失败原因
            that['$toast'].show(data.msg, {
                theme: 'outline',
                position: 'top-center',
                duration: 1500,
                type: 'error',
            })
            // 然后什么也不干
        }
    }

    /* _________________________________________________________vue生命周期 */
    mounted(){
        this.setLocationDialog=this.showLocationDialog
    }
}
</script>
<style scoped lang="scss">
.noborder {
    border: none;
}
</style>
