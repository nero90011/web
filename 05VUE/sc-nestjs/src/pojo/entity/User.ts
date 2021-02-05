/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 18:38:12
 * @LastEditTime: 2020-04-23 17:08:35
 * @LastEditors: Do not edit
 * @Description: 
 */
export interface User{
    id?: number;
    username:string;
    password:string
    phone:string
    created:Date
    salt:string
    pid:number
    vip:number
    img:string
    locations?:string
}
export const Usertype={
    id:'id',
    username:'username',
    password:'password',
    phone:'phone',
    created:'created',
    salt:'salt',
    pid:'pid',
    vip:'vip',
    img:'img'
}