import { IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"
import { ToBeOrder } from "../interface/order"

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-24 13:26:42
 * @LastEditTime: 2020-04-24 20:57:39
 * @LastEditors: Do not edit
 * @Description: 
 */
export class CreateOrderDTO{
    @IsNotEmpty({ message: '总价格不能为空' })
    @ApiProperty({description:'总价格'})
    money:number
    @IsNotEmpty({ message: '商品信息不能为空' })
    @IsNotEmpty({message:'商品信息'})
    categorys:ToBeOrder[]
}