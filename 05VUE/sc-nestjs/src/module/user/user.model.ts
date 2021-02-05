/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-15 19:02:59
 * @LastEditTime: 2020-04-23 17:06:33
 * @LastEditors: Do not edit
 * @Description:
 */
import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript'

@Table({
    tableName: 'user',
})
export class User extends Model<User> {
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number
    @Column(DataType.STRING(50))
    username: string
    @Column(DataType.STRING(32))
    password: string
    @Column(DataType.STRING(20))
    phone: string
    @Column(DataType.STRING(255))
    locations?:string
    @Column(DataType.STRING)
    salt: string
    @Column(DataType.NUMBER)
    pid: number
    @Column(DataType.NUMBER)
    vip: number
    @Column(DataType.STRING(255))
    img: string
    @CreatedAt
    created: Date
    @UpdatedAt
    updatedOn: Date
    @DeletedAt
    deletionDate: Date
}
