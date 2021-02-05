import { Table, CreatedAt, UpdatedAt, DeletedAt, Column, DataType, Model } from "sequelize-typescript";

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 00:24:29
 * @LastEditTime: 2020-04-22 11:19:02
 * @LastEditors: Do not edit
 * @Description: 
 */
@Table({
    tableName:'category'
})
export class Category extends Model<Category>{
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    })
    id:number
    @Column(DataType.STRING(50))
    name:string
    @Column(DataType.STRING(50))
    title:string
    @Column(DataType.STRING(50))
    from:string

    @Column(DataType.NUMBER)
    num:number
    @Column(DataType.NUMBER)
    money:number

    @Column(DataType.NUMBER)
    sort:number
    @Column(DataType.TINYINT)
    ishot:number
    
    @Column(DataType.STRING(3000))
    imgs:string
    @Column(DataType.STRING(3000))
    detsrcjson:string
    @Column(DataType.STRING(3000))
    chooses:string

    @Column(DataType.NUMBER)
    assid:number
    @Column(DataType.NUMBER)
    userid:number
    @Column(DataType.STRING(50))
    username:string


    @CreatedAt
    created: Date
    @UpdatedAt
    updatedOn: Date
    @DeletedAt
    deletionDate: Date
}