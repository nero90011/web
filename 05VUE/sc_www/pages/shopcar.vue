<!--
    * @Author: Nero
    * @Github: https://github.com/nero90011
    * @E-mail: 601412402@qq.com
    * @Company: myself
    * @Date: 2020-04-10 18:23:31
 * @LastEditTime: 2020-04-30 22:34:24
 * @LastEditors: Do not edit
    * @Description:
    -->
<template lang="pug">
    v-container(class="grey lighten-4 mb-10" class="overflow-hidden")
        v-app-bar(dense elevation="0" app)
            v-toolbar-title(class="font-weight-bold") 购物车
            v-spacer
            span(@click="showDeleteBtn=!showDeleteBtn") 管理
        //- 如果购物车为空,提醒用户
        v-card(v-if="shopCarResult.length===0" ripple to="/main" elevation="0")
            v-card-text(class="text-center") 这里空空如也😢,点我去首页逛逛吧!
        //- 购物车项
        v-card(
            v-for="(shopcar,index) of shopCarResult" :key="shopcar.id" 
            class="mb-3 py-4" elevation="0"
            )
            v-row()
                v-col(cols="1")
                    //- 选择按钮
                    v-checkbox(
                        justify="center" class="mt-6 ml-2"
                        v-model="checkgroup" 
                        :value="shopcar" 
                        @change="checkboxChange"
                    )
                v-col(cols="4" class="pr-0 py-1" align="center")
                    //- 图片
                    v-img( 
                        :src="shopcar.cid.imgs[0]" width="95" height="95" class="nero-img-border"
                        @click="handleChangePage(shopcar.cid.id)"
                        ripple
                    )
                v-col(cols="7" class="pl-0 py-0" align="start")
                    v-row()
                        //- 标题
                        v-col(class="py-1 pr-7" cols="12" )
                            div(v-text="shopcar.cid.title" class="pt-1 body-1 font-weight-medium"
                                @click="handleChangePage(shopcar.cid.id)"
                            )
                        //- 删除按钮
                        v-btn( 
                            icon color="red" absolute right dense
                            v-show="showDeleteBtn"
                            @click="deleteThis(shopcar.id)"
                        )
                            v-icon() mdi-delete
                        //- 分类
                        v-col(class="py-0 pr-7" cols="12" )
                            v-overflow-btn(
                                dense filled hide-no-data hide-selected
                                :items="getChooses(shopcar.cid.chooses)"
                                :label="shopcar.choose"
                                v-model="choosesSelected" 
                                @change="chooseBtnChange(index)"
                            )
                        //- 价格
                        v-col(class="py-0" cols="4" )
                            v-icon(small color="#F57F17") mdi-currency-cny
                            span(v-text="shopcar.cid.money" class="orange--text text--darken-2 ")
                        //- 数量
                        v-col(class="py-0 pr-7 pl-0 mt-n1" align="end" cols="8")
                            v-btn( icon @click="numSub(index)" :disabled="shopcar.num===1" dense)
                                v-icon mdi-minus
                            v-chip(lable v-text="shopcar.num" dense) 
                            v-btn( icon @click="numAdd(index)" :disabled="shopcar.num===shopcar.cid.num" dense)
                                v-icon mdi-plus
        //- 底部全选 价格计算按钮
        v-bottom-navigation(
            app max-height="48"
            class="nero-botnav-bottom"
            grow 
        )   
            v-btn(:disabled="false" height="56")
                //- 总选按钮
                v-checkbox(
                    justify="center" class="mt-4 ml-n12" label="全选"
                    v-model="isAllChecked"
                    @change="indexCheckChange"
                )

            span(class="body-1 mt-4 font-weight-bold") 共:
            v-icon(small class="mb-n2 ") mdi-currency-cny
            span(class="body-1 mt-4 font-weight-bold" v-text="getmoneySum" )  

            v-btn(
                class=" red ml-4" dense 
                @click="blance"
                :disabled="jieSuanBtn"
                height="56" 
            ) 
                //- 结算按钮 将要payfor的购物车项添加到vuex 并跳转到payfor界面
                span(
                    class="white--text body-1 font-weight-bold"
                    
                ) 结算
</template>
<script lang="ts">
import { Component, Vue, namespace, State, Mutation, Watch } from 'nuxt-property-decorator'
import { FindShopCarDTO, ShopCar, Category } from '../interface/findShopCar'
const ShopCarModule = namespace('shopcar')
const PayForModule=namespace('payfor')
@Component({
    middleware: 'auth',
})
export default class ShopcarIndex extends Vue {
    // vuex
    @ShopCarModule.State shopCarResult!: ShopCar[]
    @ShopCarModule.Action getShopCarResult: any
    @ShopCarModule.Action updateShopCarNum: any
    @PayForModule.Mutation setToBeOrder:any
    @ShopCarModule.Action deleteShopCar:any
    /* 溢出按钮 */
    private choosesSelected: string = ''
    // 总选按钮
    private isAllChecked: boolean = false
    // 多个check的数据 用户要payfor的数组
    private checkgroup: ShopCar[] = []
    // delete btn
    private showDeleteBtn :boolean=false
    // 提交按钮
    private jieSuanBtn:boolean=true

    /* _________________________________________________________________计算属性 */
    /**
     * @name:获取总价格
     * @param {type}
     * @return:
     */
    get getmoneySum(): number {
        let sum = 0
        for (const index in this.checkgroup) {
            sum += this.checkgroup[index].num * this.checkgroup[index].cid.money
        }
        return sum
    }

    /* __________________________________________________________________方法 */
    /**
     * @name: 结构获取chooses
     * @param {type} 
     * @return: 
     */
    getChooses(chooses: any) {
        const result = []
        for (const index in chooses) {
            result.push(chooses[index].text)
        }
        return result
    }
    /* __________________________________________________________________事件 */
    /**
     * @name: 删除购物车项
     * @param {type} 
     * @return: 
     */
    deleteThis(id:number){
        this.deleteShopCar(id)
    }
    /**
     * @name: 结算按钮 将要payfor的购物车项添加到vuex 并跳转到payfor界面
     * @param {type} 
     * @return: 
     */
    blance(){
        // 提交用户要payfor的数据到vuex
        this.setToBeOrder(this.checkgroup)
        // 跳转到payfor界面
        this.$router.push('/payfor')
    }
    /**
     * @name: checkbox的change事件
     * @param {type}
     * @return:
     */
    /* 子checkbox 的change事件 */
    checkboxChange() {
        // 当子checkbox 的数据组 长度 和 vuex的shopcar[] 长度相等时
        if (this.checkgroup.length === this.shopCarResult.length) {
            //全选
            this.isAllChecked = true
        } else {
            //没有全选
            this.isAllChecked = false
        }
        if(this.checkgroup.length===0){
            this.jieSuanBtn=true
        }else{
            this.jieSuanBtn=false
        }
    }
    /* 父checkbox 的change事件 */
    indexCheckChange() {
        // 如果点击了全选按钮就
        if (this.isAllChecked) {
            // 等于全部数据
            this.checkgroup = this.shopCarResult
        } else {
            // 清空
            this.checkgroup = []
        }
        if(this.checkgroup.length===0){
            this.jieSuanBtn=true
        }else{
            this.jieSuanBtn=false
        }
    }
    /**
     * @name: 数量加减 提交到submit
     * @param {type}
     * @return:
     */
    numSub(index: number) {
        this.updateShopCarNum({ index, addorsub: 'sub' })
    }
    numAdd(index: number) {
        this.updateShopCarNum({ index, addorsub: 'add' })
    }
    /**
     * @name: 类别改变
     * @param {type}
     * @return:
     */
    chooseBtnChange(index: number) {
        const data = this.choosesSelected
        this.updateShopCarNum({ updatechoose: data, index })
    }
    /**
     * @name: 跳转到categorys并出入数据
     * @param {type}
     * @return:
     */
    handleChangePage(id: number) {
        this.$router.push(`/category/${id}`)
    }
    /* _______________________________________________________________vue生命周期 */
    mounted() {
        // vuex axios 获取数据
        this.getShopCarResult()
    }
    beforeDestroy() {}
}
</script>
<style scoped lang="scss">
.nero-botnav-bottom {
    bottom: 56px;
}
</style>
