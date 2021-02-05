/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 02:06:47
 * @LastEditTime: 2020-04-14 11:51:55
 * @LastEditors: Do not edit
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from 'src/module/auth/auth.service';
import { LocalStrategy } from 'src/module/auth/local.strategy';
import { JwtStrategy } from 'src/module/auth/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports:[
        // 注意 auth 使用了userservice 所以在此imports usermode
        // usermode需要 使用exports 暴露自己的usersService
        UserModule,
        PassportModule.register({defaultStrategy:'jwt'}),
        JwtModule.register({
            secret:jwtConstants.secret,
            signOptions:{expiresIn:'8h'} //token过期时间
        }),
    ],
    controllers:[AuthController],
    providers:[AuthService,LocalStrategy,JwtStrategy],
    exports:[AuthService],
})
export class AuthModule {}
