/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-24 12:31:13
 * @LastEditTime: 2020-04-26 17:24:06
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable } from '@nestjs/common'
import { ToBeOrder } from 'src/pojo/interface/order'
import sequelize from '../../util/database/sequelize'
import { async } from 'rxjs/internal/scheduler/async'
import { CategoryService } from '../category/category.service'
import { Order } from './order.model'
import * as qs from 'qs'
import { ShopcarService } from '../shopcar/shopcar.service'

@Injectable()
export class OrderService {
    constructor(private categoryService: CategoryService, private shopcarService: ShopcarService) {}
    /**
     * @name: 根据id更新订单状态为5
     * @param {type} 
     * @return: 
     */
    async updateOrderStatusFive(id:number){
        try {
            await Order.update({status:5},{where:{id}})
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
    }
    /**
     * @name: 根据uuid 和sid 更改订单状态
     * @param {type}
     * @return:
     */
    async shoperUpdateOrder(uuid: string, sid: number, status: number) {
        try {
            const result = await sequelize.transaction(async t => {
                await Order.update({ status }, { where: { uuid, sid } })
            })
            return {
                code: 200,
                msg: '成功',
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
    }
    /**
     * @name: 根据 sid 查询已付款待发货的订单
     * @param {type}
     * @return:
     */
    async findAllBySid(sid: number) {
        try {
            const result = await Order.findAll({ where: { sid } })
            return {
                code: 200,
                msg: '查询成功',
                data: result,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
    }
    /**
     * @name: 更新订单状态
     *          如果cid存在且status为4 则 更新产品的销量
     *          如果产品销量超过100 更新产品为热卖
     * @param {type}
     * @return:
     */
    async updateOrderStatus(uuid: string, status: number, cid?: number) {
        let where = {}
        if (cid) {
            where = {
                uuid,
                cid, // ***不应该更具cid 因为choose  应该为orderid
            }
        } else {
            where = {
                uuid,
            }
        }
        try {
            const result = await sequelize.transaction(async t => {
                // 更新订单状态
                await Order.update({ status }, { where })
                // 如果cid存在且status为4 则 更新产品的销量 sort
                if (cid && status === 4) {
                    // 查询订单购买的产品数量
                    const order: Order = await Order.findOne({ where })
                    // 更新商品sort 如果产品销量超过100 更新产品为热卖
                    await this.categoryService.UpdateSortById(cid, order.num)
                }
            })
            return {
                code: 200,
                msg: '成功',
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
    }
    /**
     * @name: 删除订单并回滚商品数量
     * @param {type}
     * @return:
     */
    async deleteOrder(uuid: string) {
        try {
            // 事务管理
            const result = await sequelize.transaction(async t => {
                // 根据uuid查询订单
                const order: Order[] = await Order.findAll({ where: { uuid } })
                for (const item of order) {
                    // 查询商品数量
                    const { data: category } = await this.categoryService.findOneById(item.cid)
                    // 更新产品数量
                    await this.categoryService.updateNum(item.cid, category.num + item.num)
                }
                // 删除订单
                await Order.destroy({ where: { uuid } })
            })
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
        return {
            code: 200,
            msg: '订单创建成功',
        }
    }
    /**
     * @name: 面向 购买者  根据id查询所有订单 并根据 uuid进行分组
     * @param {type}
     * @return:
     */
    async findAllBuyerOrderById(uid: number) {
        try {
            const result = await Order.findAll({ where: { uid } })
            return {
                code: 200,
                msg: '查询成功',
                data: result,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
    }
    /**
     * @name: 创建订单并更新商品数量 并删除相应购物车
     * @param {type}
     * @return:
     */
    async createone(money: number, categorys: ToBeOrder[], uid: number, location: string, status: number, uuid: string) {
        try {
            // 事务管理
            const result = await sequelize.transaction(async t => {
                // 更新商品数量
                for (const item of categorys) {
                    // 查询产品数量
                    const { data: category } = await this.categoryService.findOneById(item.cid.id)
                    // 更新产品数量
                    await this.categoryService.updateNum(item.cid.id, category.num - item.num)
                    // 删除相应购物车项
                    await this.shopcarService.deleteOneById(item.id)
                    // 每个商品创建一个订单 他们的uuid相同
                    await Order.create({ susername: item.susername, uuid, uid, money, location, status, sid: item.sid, num: item.num, choose: item.choose, cid: item.cid.id, title: item.cid.title, img: item.cid.imgs[0], onemoney: item.cid.money })
                }
            })
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
        return {
            code: 200,
            msg: '订单创建成功',
        }
    }
}
