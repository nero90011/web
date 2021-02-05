<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-25 13:59:49
 * @LastEditTime: 2020-04-30 21:08:04
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container( class="grey lighten-4" )
        v-app-bar(dense elevation="0" app)
                v-btn(class="noborder"  icon @click="$router.back()" ) 
                    v-icon(v-text="'mdi-arrow-left'" )
                v-autocomplete(
                    rounded 
                    label="搜索商品"
                    hide-details dense outlined solo flat
                    class="mx-5 nero-input-search"
                    append-icon="mdi-magnify"
                    background-color="grey lighten-4" 
                    color="#F57F17"
                )
                v-btn( icon)
                    v-icon mdi-dots-vertical
        //- 如果为空,提醒用户
        //- v-card(v-if="Object.values(assess).length===0" ripple to="/shopcar" elevation="0")
        //-     v-card-text(class="text-center") 这里空空如也😢,点我去购物车🎁🎁🎁看看吧!
        v-card(elevation="0" 
            v-for="item in assess" :key="assess.key" 
            class="mt-3"
        )
            //- 商品展示
            v-card( elevation="0")
                v-row
                    v-col(cols="3" class="pl-6")
                        //- 图片
                        v-img( 
                                :src="item.img" 
                                width="50" height="50" class="nero-img-border" ripple
                                @click="$router.push(`/category/${item.cid}`)"
                            )
                    v-col(class="pr-6")
                        //- 标题
                        div(
                            v-text="`${item.title}/${item.choose}`" 
                            class="body-2  ml-n5"
                        )
                //- 打分
                v-row(class="mt-n4")
                    v-col(cols="7" align="end" class="mt-n2")
                        v-rating(
                            v-model="item.rating" 
                            length="3" background-color="grey lighten-1" color="red lighten-3"
                            readonly
                        )
                    v-col(cols="5" align="start" class="pr-6")
                        span(class="red--text text--lighten-3" v-text="composeAssessTest(item)" ) 
                //- 评价内容
                v-card( elevation="0" class="mt-n5")
                    v-card-title(class="body-2") 评价内容:
                    v-card-text(v-text="item.assesstext")
                            
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { Order } from '../../interface/order'

const CategoryModule = namespace('category')
@Component({
})
export default class Assess extends Vue {
    @CategoryModule.State assess: any

    // 计算评价文字
    composeAssessTest(item:any) {
        if (item.rating === 3) {
            return '好评😊'
        } else if (item.rating === 2) {
            return '中评🙂'
        } else {
            return '差评😒'
        }
    }
    layout() {
        return 'nothing'
    }
}
</script>

<style scoped lang="scss"></style>
