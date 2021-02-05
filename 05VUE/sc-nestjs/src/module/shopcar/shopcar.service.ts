/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 16:16:02
 * @LastEditTime: 2020-04-23 12:33:46
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable } from '@nestjs/common'
import { ShopCarAddOneDTO } from 'src/pojo/dto/shopcaraddone.dto'
import { ShopCar } from './shopcar.model'
import { CategoryService } from '../category/category.service'
import { Category } from '../category/category.model'

@Injectable()
export class ShopcarService {
    constructor(private categoryService: CategoryService) {}

    /**
     * @name: 根据id删除一项
     * @param {type} 
     * @return: 
     */
    async deleteOneById(id:number){
        try {
            await ShopCar.destroy({where:{id}}) 
            return {
                code: 200,
                msg: `删除成功`,
            }
        } catch (error) {
            console.log(error)
            return {
                code: 500,
                msg: `删除失败`,
            }
        }   
    }
    /**
     * @name: 根据id查询所有
     * @param {type}
     * @return:
     */
    async findAllByBuyerId(uid: number) {
        try {
            let result: Array<ShopCar> = await ShopCar.findAll({ where: { uid } })
            // 顺便查询需要的商品信息一起返回
            for (const item of result) {
                const { data } = await this.categoryService.findOneById(item.cid)
                const { chooses, id, title, imgs, num, ishot, money } = data
                item.cid = { chooses, id, title, imgs: imgs.split('&')[0], num, ishot, money }
            }
            return {
                code: 200,
                msg: `查询成功`,
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
     * @name:购物车 add one
     * @param {type}
     * @return:
     */
    async addOne({ choose, id: cid, num, shoperid: sid, susername }: ShopCarAddOneDTO, uid: number) {
        const result: ShopCar = await ShopCar.findOne({ where: { uid, cid, choose } }).catch((error: string) => {
            return { code: 500, msg: `添加失败` }
        })
        if (result) {
            // 已经 此用户有了此 商品的此类别 更新 此项的 数量=原来的数量+这次添加的数量
            const newnum: number = num + result.num
            await ShopCar.update({ num: newnum }, { where: { id: result.id } }).catch((error: string) => {
                return { code: 500, msg: `添加失败` }
            })
            return {
                code: 200,
                msg: `添加成功`,
            }
        } else {
            // 此项尚未存在进行添加
            try {
                await ShopCar.create({
                    uid,
                    sid,
                    cid,
                    num,
                    choose,
                    susername,
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
    }
}
