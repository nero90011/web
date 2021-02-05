import { Table, CreatedAt, UpdatedAt, DeletedAt, Column, DataType,Model } from 'sequelize-typescript'
import { ToBeOrder } from 'src/pojo/interface/order'

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-24 12:31:49
 * @LastEditTime: 2020-04-25 16:17:15
 * @LastEditors: Do not edit
 * @Description:
 */
@Table({
    tableName: 'order',
})
export class Order extends Model<Order> {
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    })
    id?: number // 订单id
    @Column(DataType.STRING(255))
    uuid:string // 订单号

    @Column(DataType.NUMBER)
    uid: number // 订单所属用户id
    @Column(DataType.NUMBER)
    comid?: number // 评价id
    @Column(DataType.NUMBER)
    money: number // 总价格

    @Column(DataType.STRING(255))
    location: string // 收货地址

    @Column(DataType.NUMBER)
    status: number // 状态：1、未付款 2、已付款,未发货 3、已发货,未确认 4、交易成功未评价 5、评价完成交易关闭

    @Column(DataType.NUMBER)
    sid:number // 发布者id

    @Column(DataType.STRING(255))
    susername:string //店铺名


    @Column(DataType.NUMBER)
    num:number // 购买数量
    @Column(DataType.STRING(255))
    choose:string // 购买品类
    @Column(DataType.NUMBER)
    cid:number // 商品id
    @Column(DataType.STRING(255))
    title:string // 商品title
    @Column(DataType.STRING(255))
    img:string // 商品img
    @Column(DataType.NUMBER)
    onemoney:number // 商品单价
    
    @CreatedAt
    created?: Date
    @UpdatedAt
    updatedOn?: Date
    @DeletedAt
    deletionDate?: Date
}
