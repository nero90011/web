/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 23:33:32
 * @LastEditTime: 2020-04-14 16:15:13
 * @LastEditors: Do not edit
 * @Description: user mapper
 */
import { User,Usertype } from '../pojo/entity/User';
import * as moment from 'moment';
import { RegisterInfoDTO } from 'src/pojo/dto/register.dto';

const {created,id,password,phone,pid,salt,username,vip}=Usertype
/**
 * @name 根据username查询user
 * @param username 
 */
export function selectUserByName(username:string):string{
    return `select * from user where username = '${username}'`
}

/**
 * @name: 用户注册
 * @param {type} 
 * @return: 
 */
export function insertRegistry({rpid,rpwd,rusername,reppwd,rphone,rsalt}:RegisterInfoDTO) {
    return `
        insert into user (${username},${password},${pid},${salt},${phone},${created})
        values('${rusername}','${rpwd}','${rpid}','${rsalt}','${rphone?rphone:''}','${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}')
    `
}