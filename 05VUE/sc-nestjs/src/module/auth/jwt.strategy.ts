/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 02:10:16
 * @LastEditTime: 2020-04-17 16:42:05
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable } from '@nestjs/common'

import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { jwtConstants } from '../../config/jwt'
import { Payload } from 'src/pojo/interface/payload.interface'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    //jwt注入只能依靠super
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //从头部取出token
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret, // 解密
        })
    }
    /**
     * @name: jwt验证 -step 4:被守卫调用
     * @param {type}
     * @return: 并记录用户信息
     */
    async validate(payload: Payload) {
        console.log('jwt验证 -step 4:被守卫调用')
        return {
            id: payload.sub,
            username: payload.username,
            role: payload.role,
            img: payload.img,
            location:payload.locations
        }
    }
}
