/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 16:15:49
 * @LastEditTime: 2020-04-23 12:34:16
 * @LastEditors: Do not edit
 * @Description:
 */
import { Controller, UsePipes, UseGuards, Post, Body, Req } from '@nestjs/common'
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger'
import { ShopcarService } from './shopcar.service'
import { ValidationPipe } from 'src/fmpi/pipe/validation.pipe'
import { AuthGuard } from '@nestjs/passport'
import { ShopCarAddOneDTO } from 'src/pojo/dto/shopcaraddone.dto'

@ApiBearerAuth() // swapper jwt验证
@ApiTags('购物车 shopcar')
@Controller('shopcar')
export class ShopcarController {
    constructor(private shopcarService: ShopcarService) {}


    /**
     * @name:根据id删除某一项
     * @param {type}
     * @return:
     */
    @UseGuards(AuthGuard('jwt'))
    @Post('deleteone')
    @ApiBearerAuth()
    @ApiOperation({ summary: '根据购物车id删除某一购物车项' })
    async deleteone(@Body() body) {
        return await this.shopcarService.deleteOneById(body.id)
    }

    /**
     * @name: 根据用户id查询所有商品
     * @param {type}
     * @return:
     */
    @UseGuards(AuthGuard('jwt'))
    @Post('all')
    @ApiOperation({ summary: '根据用户id查询所有购物车' })
    @ApiBearerAuth() //可以传递token
    async all(@Req() req: any) {
        return await this.shopcarService.findAllByBuyerId(req.user.id)
    }
    /**
     * @name:将商品添加到购物车
     * @param {type}
     * @return:
     */
    @UsePipes(new ValidationPipe())
    @UseGuards(AuthGuard('jwt'))
    @Post('addone')
    @ApiOperation({ summary: '添加商品到购物车' })
    async addone(@Body() body: ShopCarAddOneDTO, @Req() req) {
        // body 获取 choose shoperid  num 商品id
        // req 获取购买者id
        const buyerid = req.user.id
        //判断加入购物车的是否是发布者本人
        if (buyerid === body.shoperid) {
            return {
                code: '400',
                msg: '请不要恶意刷单',
            }
        } else {
            return await this.shopcarService.addOne(body, buyerid)
        }
    }
}
