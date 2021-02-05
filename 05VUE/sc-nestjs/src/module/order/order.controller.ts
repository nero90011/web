/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-24 12:31:25
 * @LastEditTime: 2020-04-25 20:30:40
 * @LastEditors: Do not edit
 * @Description:
 */
import { Controller, Post, UseGuards, Body, Req, UsePipes, ValidationPipe, UseInterceptors } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { CreateOrderDTO } from 'src/pojo/dto/createorder.dto'
import moment = require('moment')
import { OrderService } from './order.service'
import { RbacInterceptor } from 'src/fmpi/interceptor/rbac.interceptor'
import { roleConstans } from 'src/config/rbac'

@ApiTags('order') // 添加 接口标签 装饰器
@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}
    /**
     * @name: 面向发布者 根据uuid和sid 更改订单状态为3 已发货未确认
     * @param {type} 
     * @return: 
     */
    @Post('shoperfahuo')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '面向发布者 根据uuid和sid 更改订单状态为3 已发货未确认' })
    @ApiBearerAuth()
    @UseInterceptors(new RbacInterceptor(roleConstans.SHOPER))
    async shoperfahuo(@Body() body:any,@Req() req:any){
        return await this.orderService.shoperUpdateOrder(body.uuid,req.user.id,3)
    }
    /**
     * @name: 面向 发布者 根据 sid 查询 所有订单
     * @param {type} 
     * @return: 
     */
    @Post('shoperorder')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '面向 发布者 根据 sid 查询 所有订单' })
    @ApiBearerAuth()
    @UseInterceptors(new RbacInterceptor(roleConstans.SHOPER))
    async shoperorder(@Req() req:any){
        return await this.orderService.findAllBySid(req.user.id)
    }
    /* ___________________________________________________________________________ */
    /**
     * @name: 购买者 确认收货 根据uuid 和 cid 更新订单状态为 4、交易成功未评价
     *          并更新 相应商品的 销量 sort 如果商品销量超过100则为热销
     * @param {type} 
     * @return: 
     */
    @Post('buyersubmitorder')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '购买者 确认收货 根据uuid 和 cid 更新订单状态交易成功未评价' })
    @ApiBearerAuth()
    async buyersubmitorder(@Body() body:any){
        return await this.orderService.updateOrderStatus(body.uuid,4,body.cid)
    }
    /**
     * @name:购买者 取消订单(删除订单)
     * @param {type}
     * @return:
     */
    @Post('buyerdeleteorder')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '面向 购买者  根据 uuid 删除订单 并回滚商品数量' })
    @ApiBearerAuth()
    // @UseInterceptors(new RbacInterceptor(roleConstans.HUMAN))
    async buyerdeleteorder(@Body() body: any) {
        // 根据 uuid 删除订单 并回滚商品数量
        return await this.orderService.deleteOrder(body.uuid)
    }
    /**
     * @name: 购买者  更新订单状态为2、已付款,未发货'  1、未付款 2、已付款,未发货 3、已发货,未确认 4、交易成功未评价 5、评价完成交易关闭
     * @param {type}
     * @return:
     */
    @Post('buyerpayfororder')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '面向 购买者  更新订单状态为2、已付款,未发货' })
    @ApiBearerAuth()
    // @UseInterceptors(new RbacInterceptor(roleConstans.HUMAN))
    async buyerpayfororder(@Body() body:any){
        return await this.orderService.updateOrderStatus(body.uuid,2)
    }

    /**
     * @name: 面向 购买者  根据id查询所有订单
     * @param {type}
     * @return:
     */
    @Post('buyerfindall')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '面向 购买者  根据id查询所有订单' })
    @ApiBearerAuth()
    // @UseInterceptors(new RbacInterceptor(roleConstans.HUMAN))
    async buyerfindall(@Body() body: number, @Req() req: any) {
        return await this.orderService.findAllBuyerOrderById(req.user.id)
    }

    /**
     * @name: 创建订单
     * @param {type}
     * @return:
     */
    @Post('createone')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '创建订单 更新商品数量 删除购物车项' })
    @ApiBearerAuth()
    @UsePipes(new ValidationPipe()) //使用管道验证
    async createone(@Body() body: CreateOrderDTO, @Req() req: any) {
        // 后端再验证一边总价验证成功 创建订单
        // 创建订单  创建成功 更新相应商品的数量
        // const order={
        //     money:body.money,// 总价格   body
        //     categorys:body.categorys,// 商品信息 购买数量  body

        //     uid:req.user.id,  //购买者id req
        //     location:req.user.locations, //购买者位置信息  req

        //     status:1, // 订单状态  设定
        //     uuid:moment().format("YYYYMMDDHHmmsss")+Math.floor(Math.random()*10)
        // }
        const uuid = moment().format('YYYYMMDDHHmmsss') + Math.floor(Math.random() * 10)
        return await this.orderService.createone(body.money, body.categorys, req.user.id, req.user.location, 1, uuid)
    }
}
