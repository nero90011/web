/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-26 16:47:47
 * @LastEditTime: 2020-04-26 18:47:12
 * @LastEditors: Do not edit
 * @Description:
 */
import { Controller, Post, UseGuards, UsePipes, ValidationPipe, Body, Req, UseInterceptors } from '@nestjs/common'
import { AssessService } from './assess.service'
import { AuthGuard } from '@nestjs/passport'
import { ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { CreateAssessDTO } from 'src/pojo/dto/createAssess.dto'
import { RbacInterceptor } from 'src/fmpi/interceptor/rbac.interceptor'
import { roleConstans } from 'src/config/rbac'

@ApiTags('assess')
@Controller('assess')
export class AssessController {
    constructor(private assessService: AssessService) {}
    
    /**
     * @name: 根据商品id获取所有评论
     * @param {type} 
     * @return: 
     */
    @Post('call')
    @ApiOperation({ summary: '根据商品id获取所有评论' })
    @ApiBearerAuth()
    async call(@Body() body:any){
        return await this.assessService.findAllByCid(body.cid)
    }
    /**
     * @name:发布者获取评价列表 sall
     * @param {type}
     * @return:
     */
    @Post('sall')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '发布者获取评价列表' })
    @ApiBearerAuth()
    @UseInterceptors(new RbacInterceptor(roleConstans.SHOPER))
    async sall(@Req() req: any) {
        return await this.assessService.findAllBySid(req.user.id)
    }

    /**
     * @name: 创建评价并 更改订单状态为5评价完成交易关闭
     * @param {type}
     * @return:
     */
    @Post('createone')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '创建评价并 更改订单状态为5评价完成交易关闭' })
    @ApiBearerAuth()
    @UsePipes(new ValidationPipe()) //使用管道验证
    async createone(@Body() body: CreateAssessDTO, @Req() req: any) {
        return await this.assessService.createOne(body, req.user.id)
    }
    /**
     * @name:根据用户uid查询所有评价
     * @param {type}
     * @return:
     */
    @Post('uall')
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: '根据用户uid查询所有评价' })
    @ApiBearerAuth()
    async all(@Req() req: any) {
        return await this.assessService.findAllByUid(req.user.id)
    }
}
