/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-26 16:47:35
 * @LastEditTime: 2020-04-26 19:05:55
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable } from '@nestjs/common'
import { CreateAssessDTO } from 'src/pojo/dto/createAssess.dto'
import sequelize from '../../util/database/sequelize'
import { Assess } from './assess.model'
import { OrderService } from '../order/order.service'

@Injectable()
export class AssessService {
    constructor(private orderservice: OrderService) {}

    /**
     * @name:创建评价 并更新 订单状态为5
     * @param {type}
     * @return:
     */
    async createOne({ rating, assesstext, sid, oid, uuid, cid, title, choose, img }: CreateAssessDTO, uid: number) {
        try {
            const result = await sequelize.transaction(async t => {
                // 创建评价
                await Assess.create({ uid, rating, assesstext, sid, oid, uuid, cid, title, choose, img })
                // 更新订单状态为5
                await this.orderservice.updateOrderStatusFive(oid)
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
     * @name:根据用户uid查询所有订单
     * @param {type}
     * @return:
     */
    async findAllByUid(uid: number) {
        try {
            const data = await Assess.findAll({ where: { uid } })
            return {
                code: 200,
                msg: '成功',
                data,
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
     * @name:根据用户sid查询所有订单
     * @param {type}
     * @return:
     */
    async findAllBySid(sid: number) {
        try {
            const data = await Assess.findAll({ where: { sid } })
            return {
                code: 200,
                msg: '成功',
                data,
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
     * @name:根据用户Cid查询所有订单
     * @param {type}
     * @return:
     */
    async findAllByCid(cid: number) {
        try {
            const data = await Assess.findAll({ where: { cid } })
            return {
                code: 200,
                msg: '成功',
                data,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `系统繁忙请稍后再试`,
            }
        }
    }
}
