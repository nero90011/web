<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-07 15:12:53
 * @LastEditTime: 2020-04-07 15:36:47
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    //- slot:内容分发
        父组件中:引入子组件并插入dom元素
        子组件中: 使用slot接受dom元素
    div
        slot-child-A
            template(v-slot:sy="") 1111
            template(v-slot:yl="")
                li(v-for="item in datalist" :key="item.id" v-text="item")
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import slotchild01 from '../../components/slot/SlotChiled01.vue'

@Component({
    components:{
        'slot-child-A':slotchild01
    }
})
export default class SlotDemo01 extends Vue {
    private datalist:Array<string>=['111','222','333']
}
</script>
<style scoped>
</style>