<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 18:23:39
 * @LastEditTime: 2020-04-10 20:32:24
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    v-container(  )  
        | 1
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Center extends Vue {
    
    beforeRouteEnter (to:any, from:any, next:any) {
        console.log('局部检查');
        if(true){
            next();
        }else{
            next('/login');
        }
    }
}
</script>
<style scoped>
</style>