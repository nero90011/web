import { IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-26 16:57:08
 * @LastEditTime: 2020-04-26 17:03:44
 * @LastEditors: Do not edit
 * @Description: 
 */
export class CreateAssessDTO{
    @IsNotEmpty({ message: '评价级别不能为空' })
    @ApiProperty({description:'评价级别 3好评 2中评 1差评'})
    rating:number
    @IsNotEmpty({ message: '评价内容不能为空' })
    @ApiProperty({description:'评价内容'})
    assesstext:string

    @IsNotEmpty({ message: '订单id不能为空' })
    @ApiProperty({description:'订单id'})
    oid:number
    @IsNotEmpty({ message: '订单uuid不能为空' })
    @ApiProperty({description:'订单uuid'})
    uuid:string

    @IsNotEmpty({ message: 'uid不能为空' })
    @ApiProperty({description:'购买者id'})
    uid:number
    @IsNotEmpty({ message: '发布者id不能为空' })
    @ApiProperty({description:'发布者id'})
    sid:number

    @IsNotEmpty({ message: '商品id不能为空' })
    @ApiProperty({description:'商品id'})
    cid:number
    @IsNotEmpty({ message: '商品类别不能为空' })
    @ApiProperty({description:'商品类别'})
    choose:string
    @IsNotEmpty({ message: '商品标题不能为空' })
    @ApiProperty({description:'商品标题'})
    title:string
    @IsNotEmpty({ message: '商品img不能为空' })
    @ApiProperty({description:'商品img'})
    img:string
}