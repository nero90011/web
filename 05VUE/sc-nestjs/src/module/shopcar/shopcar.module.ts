/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 16:15:28
 * @LastEditTime: 2020-04-24 22:47:38
 * @LastEditors: Do not edit
 * @Description:
 */
import { Module } from '@nestjs/common'
import { ShopcarController } from './shopcar.controller'
import { ShopcarService } from './shopcar.service'
import { CategoryModule } from '../category/category.module'

@Module({
    controllers: [ShopcarController],
    providers: [ShopcarService],
    imports: [CategoryModule],
    exports: [ShopcarService],
})
export class ShopcarModule {}
