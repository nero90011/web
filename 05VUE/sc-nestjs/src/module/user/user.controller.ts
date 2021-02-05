/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 19:15:31
 * @LastEditTime: 2020-04-23 17:04:28
 * @LastEditors: Do not edit
 * @Description:
 */
import { Controller, Get, Param, Post, Body, Query, UseGuards, UsePipes, UseInterceptors, UploadedFile, Req } from '@nestjs/common'
import { UserService } from 'src/module/user/user.service'
import { AuthGuard } from '@nestjs/passport'
import { RegisterInfoDTO } from 'src/pojo/dto/register.dto'
import { ValidationPipe } from '../../fmpi/pipe/validation.pipe' // 我们重写了validationPipe 请注意一定要引入我们自己的 不然可能从nestjs中自己引入就不生效了
import { RbacInterceptor } from 'src/fmpi/interceptor/rbac.interceptor'
import { roleConstans } from 'src/config/rbac'
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express'
import { v5, v4 } from 'uuid'
import { UploadService } from '../upload/upload.service'

@ApiTags('user') // 添加 接口标签 装饰器
@Controller('user')
export class UserController {
    constructor(private userService: UserService, private uploadService: UploadService) {}
    /**
     * @name: 设置收货地址
     * @param {type} 
     * @return: 
     */
    @Post('location')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary:'设置用户地址'})
    async location(@Body() body:any,@Req() req:any){
        return await this.userService.updateOneUser('locations',body.location,'id',req.user.id)
    }
    /**
     * @name: 用户注册
     * @param {type}
     * @return:
     */
    // @UseGuards(AuthGuard('jwt')) // 守卫 guard
    @UsePipes(new ValidationPipe()) //使用管道验证
    @Post('register')
    @ApiOperation({ summary: '用户注册' })
    async register(@Body() body: RegisterInfoDTO) {
        //指定dto
        return await this.userService.register(body)
    }
    /**
     * @name: 根据姓名获取user,测试用
     * @param {type}
     * @return:
     */
    @Post('name')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '获取用户信息' })
    // @UseInterceptors(new RbacInterceptor(roleConstans.ADMIN)) //权限控制
    async getUserByName(@Body() body: any) {
        return await this.userService.findOneByName(body.name)
    }
    /**
     * @name:更改用户头像
     * @param {type}
     * @return:
     */
    @Post('avator')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '更改用户头像' })
    @UseInterceptors(FileInterceptor('file'))
    async setAvator(@UploadedFile() file, @Req() req) {
        // 进行图片上传
        const isupload = await this.uploadService.uploadImage(file)
            // 有错误,直接返回给前台
        if (isupload.code !== 200) return isupload
            // 根据img名删除原来的图片
        const filenamearr=(req.user.img as string).split('/')
        const filename=filenamearr[filenamearr.length-1]
        const isdelete = await this.uploadService.deleteImageByfileName(filename)
            //判断是否删除成功
        if(isdelete.code!==200) return isdelete
        // 没有错误,更改数据库  src 现在为 isupload.data
        const result = await this.userService.updateOneUser('img',isupload.data,'id', req.user.id)
        
        // 返回消息到前台
        return {
            code: result.code,
            msg: result.msg,
        }
    }
}
