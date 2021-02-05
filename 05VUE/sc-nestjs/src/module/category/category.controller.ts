/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 00:40:52
 * @LastEditTime: 2020-04-21 17:37:03
 * @LastEditors: Do not edit
 * @Description:
 */
import { Controller, UsePipes, Post, Body, Req, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger'
import { CategoryService } from './category.service'
import { ValidationPipe } from 'src/fmpi/pipe/validation.pipe'
import { AddBodyInfoDTO } from 'src/pojo/dto/addbaby.dto'
import { AuthGuard } from '@nestjs/passport'
import { ShopPageDTO } from 'src/pojo/dto/shoperpage.dto'
import { RbacInterceptor } from 'src/fmpi/interceptor/rbac.interceptor'
import { roleConstans } from 'src/config/rbac'
import { ShopDTO } from 'src/pojo/dto/shop.dto'
import { FindBabyById } from 'src/pojo/dto/findBabyById.dto'

@ApiBearerAuth() //swapper jwt验证
@ApiTags('商品 category') // 添加 接口标签 装饰器
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    /**
     * @name: 新增商品
     * @param {type}
     * @return:
     */
    @UsePipes(new ValidationPipe()) //自己的 不是nest/common的
    @UseGuards(AuthGuard('jwt'))
    @Post('addone')
    @ApiOperation({ summary: '添加新商品' })
    async addOne(@Body() body: AddBodyInfoDTO, @Req() req) {
        //req 获取userid信息
        const userid = req.user.id
        const username=req.user.username
        return await this.categoryService.addOne(body, userid,username)
    }
    /**
     * @name:获取shop发布的商品 分页模式
     * @param {type}
     * @return:
     */

    @UseGuards(AuthGuard('jwt'))
    @UsePipes(new ValidationPipe())
    @UseInterceptors(new RbacInterceptor(roleConstans.SHOPER))
    @Post('shoperpage')
    @ApiOperation({ summary: '获取shop发布的商品 分页模式 根据userid' })
    @ApiBearerAuth() //可以传递token
    async shoperPage(@Body() Body: ShopPageDTO, @Req() req: any) {
        return await this.categoryService.findbyPage(Body, req.user.id)
    }
    /**
     * @name:分页获取商品 所有人都可以
     * @param {type}
     * @return:
     */
    @Post('main')
    @UsePipes(new ValidationPipe())
    @ApiOperation({ summary: '分页获取商品到主页' })
    async shop(@Body() body: ShopDTO) {
        return await this.categoryService.findAllByPage(body)
    }
    /**
     * @name:根据id查询并返回categorie
     * @param {type}
     * @return:
     */
    @Post('category')
    @ApiOperation({summary:'根据id获取商品信息'})
    @UsePipes(new ValidationPipe())
    async findCategoryById(@Body() body:FindBabyById){
        return this.categoryService.findOneById(body.id)
    }
}
