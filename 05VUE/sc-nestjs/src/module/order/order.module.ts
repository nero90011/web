/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-24 12:30:42
 * @LastEditTime: 2020-04-26 17:26:25
 * @LastEditors: Do not edit
 * @Description: 
 */
import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { CategoryModule } from '../category/category.module'
import { ShopcarModule } from '../shopcar/shopcar.module'

@Module({
    imports:[CategoryModule,ShopcarModule],
    providers: [OrderService],
    controllers: [OrderController],
    exports:[OrderService],
})
export class OrderModule {}
