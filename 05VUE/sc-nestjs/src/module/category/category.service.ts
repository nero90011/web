/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 00:40:39
 * @LastEditTime: 2020-04-29 21:04:51
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable } from '@nestjs/common'
import { AddBodyInfoDTO } from 'src/pojo/dto/addbaby.dto'
import { Category } from './category.model'
import { ShopPageDTO } from 'src/pojo/dto/shoperpage.dto'
import { ShopDTO } from 'src/pojo/dto/shop.dto'
import {Op} from 'sequelize'

@Injectable()
export class CategoryService {
    /**
     * @name: 更新产品销量 如果销量超过100 则更新产品为热卖
     * @param {type}
     * @return:
     */
    async UpdateSortById(id: number, sort: number) {
        // 查询产品当前的销量
        const category: Category = await Category.findOne({ where: { id } })
        // 更新产品销量
        await Category.update({ sort: sort + category.sort }, { where: { id } })
        // 如果产品销量超过100 更新产品为热卖
        if (sort + category.sort >= 100) {
            await Category.update({ ishot: 1 }, { where: { id } })
        }
    }
    /**
     * @name: 根据产品id更新产品数量
     * @param {type}
     * @return:
     */
    async updateNum(id: number, num: number) {
        try {
            await Category.update({ num }, { where: { id } })
        } catch (error) {
            throw error
        }
    }
    /**
     * @name: 分页查询商品
     * @param {type}
     * @return:
     */
    async findAllByPage(page: ShopDTO) {
        try {
            const result = await Category.findAll({
                offset: (page.num - 1) * page.size, // 跳过多少个实例
                limit: page.size, // 然后获取多少个实例  num 页码  size 每页长度
                // where:{num:} // 剩余数量不===0的商品
                where: {
                    num: {
                        [Op.ne]: 0,
                    },
                },
            })
            return {
                code: 200,
                msg: '查询成功',
                data: result,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `查询失败`,
            }
        }
    }
    /**
     * @name: 分页查询categories 根据userid
     * @param {type}
     * @return:
     */
    async findbyPage(page: ShopPageDTO, userid: number) {
        try {
            const result = await Category.findAll({
                where: {
                    userid,
                },
                offset: (page.num - 1) * page.size, // 跳过多少个实例
                limit: page.size, // 然后获取多少个实例  num 页码  size 每页长度
            })
            return {
                code: 200,
                msg: '查询成功',
                data: result,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `查询失败`,
            }
        }
    }
    /**
     * @name:新增商品
     * @param {type}
     * @return:
     */
    async addOne(category: AddBodyInfoDTO, userid: number, username: string) {
        const { bmoney, bname, bnum, btitle, chooses, detsrcjson, imgs, bfrom } = category
        try {
            await Category.create({
                name: bname,
                title: btitle,
                from: bfrom,
                num: +bnum, //转成number
                money: +bmoney, // 转成number
                imgs,
                chooses,
                detsrcjson,
                userid,
                username,
            })
            return {
                code: 200,
                msg: `添加成功`,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `添加失败`,
            }
        }
    }
    /**
     * @name: 根据id查询商品信息
     * @param {type}
     * @return:
     */
    async findOneById(id: number) {
        try {
            const result: Category = await Category.findOne({ where: { id } })
            return {
                code: 200,
                msg: '查询成功',
                data: result,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `查询失败`,
            }
        }
    }
}
