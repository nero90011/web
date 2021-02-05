/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-17 10:05:32
 * @LastEditTime: 2020-04-19 20:23:26
 * @LastEditors: Do not edit
 * @Description:
 */
import { Controller, Post, UploadedFile, Req, UseGuards, Body, Get, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'
import { UploadService } from './upload.service'
import { v5, v4 } from 'uuid'

import { FileInterceptor } from '@nestjs/platform-express'
import { log } from 'util'

@ApiTags('file')
@Controller('file') //路由不能起名为upload,不知道为啥
export class UploadController {
    constructor(private uploadService: UploadService) {}
    /**
     * @name: 单img上传
     * @param {type}
     * @return:
     */
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '单图片上传' })
    @Post('image')
    @UseInterceptors(FileInterceptor('file')) // file对应HTML表单的name属性
    async uploadImage(@UploadedFile() file: any, @Body() body) {
        return await this.uploadService.uploadImage(file)
    }
    /**
     * @name:单文件删除
     * @param {type}
     * @return:
     */
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary:'单文件删除'})
    @Post('delete')
    async deleteFile(@Body() body){
        //前台发过来的是src需要处理
        const filenamearr=(body.imgsrc as string).split('/')
        const filename=filenamearr[filenamearr.length-1]
        return await this.uploadService.deleteImageByfileName(filename)
    }
}
