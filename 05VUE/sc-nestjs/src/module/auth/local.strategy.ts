/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 03:27:35
 * @LastEditTime: 2020-04-15 17:18:33
 * @LastEditors: Do not edit
 * @Description: 本地策略
 */
import { Strategy, IStrategyOptions } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common'
import { AuthService } from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    //起名local
    constructor(private readonly authService: AuthService) {
        super({
            usernameField:'username',
            passwordFiled:'password'
        }as IStrategyOptions)
    }

    async validate(username: string, password: string){
        const {user} = await this.authService.validateUser(username, password)
        if (!user) {
            throw new BadRequestException('用户名或密码错误')
        }
        return user
    }
}
