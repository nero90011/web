<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 18:23:31
 * @LastEditTime: 2020-04-11 17:01:38
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        v-list(  )
            v-list-item()
                
            
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
@Component
export default class Cinema extends Vue {
    private cinimas:Array<any> =[]
    mounted() {
        // axios.get(
        //     '/ajax/cinemaList?day=2020-04-11&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1586591107349&cityId=10&optimus_uuid=EAA2A1407AD911EA83860B234846F8AB217C957557474C68B3A6330303C10489&optimus_risk_level=71&optimus_code=10'
        // ).then(res=>{
        //     console.log(res.data);
        // })
    }
}
</script>
<style scoped>
</style>