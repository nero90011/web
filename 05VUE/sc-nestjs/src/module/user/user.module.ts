/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 20:23:06
 * @LastEditTime: 2020-04-17 16:56:52
 * @LastEditors: Do not edit
 * @Description:
 */
import { Module } from '@nestjs/common'
import { UserService } from 'src/module/user/user.service'
import { UserController } from './user.controller'
import { UploadModule } from '../upload/upload.module'

@Module({
    imports: [UploadModule],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {}
