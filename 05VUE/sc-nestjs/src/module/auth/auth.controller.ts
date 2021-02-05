/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 13:04:05
 * @LastEditTime: 2020-04-18 12:57:51
 * @LastEditors: Do not edit
 * @Description:
 */
import {
    Controller,
    Post,
    Body,
    UsePipes,
    BadRequestException,
    UseGuards,
    Get,
    Req,
} from '@nestjs/common'
import { LoginerInfoDTO } from 'src/pojo/dto/loginer.dto'
import { AuthService } from './auth.service'
import { ValidationPipe } from '../../fmpi/pipe/validation.pipe'
import { ApiTags, ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'
import { UserService } from '../user/user.service'
import { User } from '../user/user.model'

@ApiBearerAuth() //swapper jwt验证
@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,private readonly userService: UserService) {}

    /**
     * @name: jwt登录 'JWT验证 - Step 1: 用户请求登录'
     * @param {type}
     * @return:
     */
    @UsePipes(new ValidationPipe()) //使用管道验证参数类型
    @Post('login')
    @ApiBody({
        // swipper ui 记住login的用户名密码
        description: '用户登录',
        type: LoginerInfoDTO,
    })
    @ApiOperation({ summary: '用户登录' })
    // @UseGuards(AuthGuard('local'))  // 无需使用local策略  我们的步骤已经包含了本地策略
    async login(@Body() body: LoginerInfoDTO) {
        console.log('JWT验证 - Step 1: 用户请求登录', body.lusername)
        const authResult = await this.authService.validateUser(
            body.lusername,
            body.lpassword,
        )
        switch (authResult.code) {
            case 1:
                return this.authService.certificate(authResult.user)
            case 2:
                throw new BadRequestException('账号或密码不正确')
            default:
                throw new BadRequestException('用户不存在')
        }
    }
    /**
     * @name:  获取个人信息  验证完的token存储在request中可以直接调用
     * @param {type}  
     * @return:
     */
    @Get('user')
    @ApiOperation({ summary: '获取个人信息' })
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth() //可以传递token
    async user(@Req() req) {
        // 重新查询数据库 , 如果从req中调用存在 数据库更新后 无法即时更新的问题
        const user:User=await this.userService.findOneByName(req.user.username)
        // 只返回必要信息
        return {
            user: {
                username:user.username,
                id:user.id,
                img:user.img,
                pid:user.pid,
                vip:user.vip,
                location:user.locations
            },
        }
    }
    /**
     * @name:退出登录
     * @param {type}
     * @return:
     */
    @Post('logout')
    @ApiOperation({summary:'退出登录'})
    // @UseGuards(AuthGuard('jwt'))
    async logout(){
        return '退出成功'
    }
}
