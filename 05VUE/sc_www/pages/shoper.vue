<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-18 11:41:36
 * @LastEditTime: 2020-04-30 21:12:01
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container(  class="grey lighten-4" height="100%"  fluid )
        v-card(elevation="0" dense )
            v-row
                v-col(cols="10" )
                    v-avatar(  class="mx-2")
                        v-icon(v-text="'mdi-store'" color="yellow darken-4 "  x-large)
                    span(v-text="auth.user.username+'的店铺'" class="mx-2 title")
                v-col()
                    v-btn(to="/shoperpages/shopersetting"  icon) 
                        v-icon(v-text="'mdi-cog'" )
            
            v-tabs(fixed-tabs color="yellow darken-4")
                v-tab(to="/shoper/order/waitfh" class="body-1") 订单
                    v-badge(
                        color="yellow darken-4"
                        :content="`+${Object.keys(GetterWaitForFaHuo).length}`"
                        v-show="Object.keys(GetterWaitForFaHuo).length!==0"
                        bordered
                        offset-x="0"
                        offset-y="0"
                    )
                v-tab(to="/shoper/baby" class="body-1") 宝贝
                v-tab(to="/shoper/assess" class="body-1") 评论
                    //- v-badge(
                    //-     color="yellow darken-4"
                    //-     content="+10"
                    //-     bordered
                    //-     offset-x="0"
                    //-     offset-y="0"
                    //- )
                v-tabs-items
                    v-card(elevation="0"  )
                        keep-alive
                            nuxt()
</template>
<script lang='ts'>
import { Component, Vue ,State, namespace} from 'nuxt-property-decorator'

const ShoperModule=namespace('shoper')
@Component({
    middleware: 'auth',
})
export default class ShoperIndex extends Vue {
     @State readonly auth:any
     @ShoperModule.Getter GetterWaitForFaHuo:any
}
</script>
<style scoped lang="scss">
</style>