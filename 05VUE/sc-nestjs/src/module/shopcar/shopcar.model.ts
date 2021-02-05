import { Table, Column, DataType, CreatedAt, UpdatedAt, DeletedAt ,Model} from 'sequelize-typescript'

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 16:21:30
 * @LastEditTime: 2020-04-22 11:25:39
 * @LastEditors: Do not edit
 * @Description:
 */
@Table({
    tableName: 'shopcar'
})
export class ShopCar extends Model<ShopCar> {
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number //购物车id

    @Column(DataType.NUMBER)
    uid: number // 购买者id
    @Column(DataType.NUMBER)
    sid: number //发布者id
    @Column(DataType.STRING(50))
    susername:string //商铺名


    @Column(DataType.NUMBER)
    cid: any //商品id
    @Column(DataType.NUMBER)
    num: number //商品数量
    @Column(DataType.STRING(50))
    choose: string //商品类别

    @CreatedAt
    created: Date
    @UpdatedAt
    updatedOn: Date
    @DeletedAt
    deletionDate: Date
}
