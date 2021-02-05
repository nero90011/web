/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 19:33:02
 * @LastEditTime: 2020-04-24 21:29:46
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable } from '@nestjs/common'
import { selectUserByName, insertRegistry } from '../../mapper/user'
import sequelize from '../../util/database/sequelize'
import { makeSalt, encryptPassword } from '../../util/password/cryptogram'
import { codemsg } from 'src/pojo/interface/codemsginterface'
import { RegisterInfoDTO } from 'src/pojo/dto/register.dto'
import { User } from './user.model'

@Injectable()
export class UserService {
    /**
     * @name: 使用username查询是否有该用户
     * @param {type}
     * @return:
     */
    async findOneByName(username: string) {
        try {
            const user = await User.findOne({ where: { username: username } })
            return user
        } catch (err) {
            console.error(err)
            return {
                code: 500, //请求错误
                msg: '服务器繁忙,请稍后再试',
            }
        }
    }
    /**
     * @name: 更改某一用户的某一属性
     * @param {type}
     * @return:
     * @Disription: update user set vk=vv where wk=wv
     */
    async updateOneUser(vk:any,vv:any,wk:any,wv:any) {
        try {
            await User.update({[vk]:vv},{where:{[wk]:wv}})
        } catch (err) {
            console.log(err)
            return {
                code: 500, //请求错误
                msg: '服务器繁忙,请稍后再试',
            }
        }
        return{
            code:200,
            msg:`更改成功`
        }
    }
    /**
     * @name: 注册
     * @param requestbody
     * @return:
     */
    async register(registry: RegisterInfoDTO): Promise<codemsg> {
        const { rpid, rpwd, rusername, reppwd, rphone, rsalt } = registry
        if (rpwd !== reppwd) {
            return {
                code: 400, //请求错误
                msg: '两次输入密码不一致',
            }
        }
        const user = await this.findOneByName(rusername)
        if (user) {
            return {
                code: 400, //请求错误
                msg: '用户已经存在',
            }
        }
        registry.rsalt = makeSalt() //制作密码盐
        registry.rpwd = encryptPassword(rpwd, registry.rsalt) //加密密码
        const registerSql = insertRegistry(registry) //获取sql
        try {
            await sequelize.query(registerSql, { logging: true })
            return {
                code: 200,
                msg: 'Success',
            }
        } catch (error) {
            return {
                code: 503, //由于临时的服务器维护或者过载，服务器当前无法处理请求。这个状况是临时的，并且将在一段时间以后恢复
                msg: `Service error:${error}`,
            }
        }
    }
}
