/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 02:06:27
 * @LastEditTime: 2020-04-17 16:35:22
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable, Inject, BadRequestException } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { User } from 'src/pojo/entity/User'
import { encryptPassword } from 'src/util/password/cryptogram'
import { JwtService } from '@nestjs/jwt'
import { codemsg } from 'src/pojo/interface/codemsginterface'
import { Payload } from 'src/pojo/interface/payload.interface'

@Injectable()
export class AuthService {
    constructor(readonly jwtService: JwtService, private readonly userService: UserService) {}
    /**
     * @name: JWT验证 - Step 2: 校验用户信息
     * @param {type}
     * @return:
     */
    async validateUser(username: string, password: string): Promise<codemsg> {
        console.log('JWT验证 - Step 2: 校验用户信息')
        const user: User = await this.userService.findOneByName(username)
        if (!user) return { code: 3, user: null }
        const { password: hashPassword, salt } = user
        // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
        if (!(hashPassword === encryptPassword(password, salt))) return { code: 2, user: null }
        return { code: 1, user }
    }
    /**
     * @name: JWT验证 - Step 3: 处理 jwt 签证
     * @param {type}
     * @return:
     */
    async certificate(user: User) {
        // jwt第3部分payload 用来存储用户信息
        const payload:Payload = { username: user.username, sub: user.id, role: user.pid, img: user.img ,locations:user.locations}
        console.log('JWT验证 - Step 3: 处理 jwt 签证')
        try {
            // 并对head 和 payload进行签证
            const token = this.jwtService.sign(payload)
            return {
                code: 200,
                token,
                msg: '登录成功',
            }
        } catch (error) {
            throw new BadRequestException('用户名或密码不正确')
        }
    }
}
