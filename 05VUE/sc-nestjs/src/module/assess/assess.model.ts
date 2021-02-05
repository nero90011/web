import { Table,Model, Column, DataType, CreatedAt, UpdatedAt, DeletedAt } from "sequelize-typescript";
/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-26 16:48:04
 * @LastEditTime: 2020-04-26 17:38:13
 * @LastEditors: Do not edit
 * @Description: 
 */
@Table({
    tableName:'assess'
})
export class Assess extends Model<Assess>{
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number
    @Column(DataType.NUMBER)
    rating:number
    @Column(DataType.STRING(255))
    assesstext:string


    @Column(DataType.NUMBER)
    oid:number
    @Column(DataType.STRING(255))
    uuid:string


    @Column(DataType.NUMBER)
    uid:number

    @Column(DataType.NUMBER)
    sid:number

    @Column(DataType.NUMBER)
    cid:number
    @Column(DataType.STRING(255))
    choose:string
    @Column(DataType.STRING(255))
    title:string
    @Column(DataType.STRING(255))
    img:string


    @CreatedAt
    created?: Date
    @UpdatedAt
    updatedOn?: Date
    @DeletedAt
    deletionDate?: Date
}