/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 22:19:49
 * @LastEditTime: 2020-04-14 11:58:12
 * @LastEditors: Do not edit
 * @Description: 密码加密工具
 */
import  * as crypto  from 'crypto';
/**
 * @name: 制作随机盐
 * @msg: 
 * @Description: 
 * @param {type} 
 * @return: 
 */
export function makeSalt():string {
    return crypto.randomBytes(3).toString('base64')
}
/**
 * @name: 使用随机言加密密码
 * @msg: 
 * @Description: 
 * @param password
 * @param salt
 * @return: 
 */
export function encryptPassword(password:string,salt:string):string{
    if(!password||!salt){
        return ''
    }
    const tempSalt=Buffer.from(salt,'base64')
    return (
        crypto.pbkdf2Sync(password,tempSalt,10000,16,'sha1').toString('base64')
    )
}

