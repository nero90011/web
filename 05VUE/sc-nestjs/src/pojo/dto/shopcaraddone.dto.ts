import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 16:16:55
 * @LastEditTime: 2020-04-22 11:35:13
 * @LastEditors: Do not edit
 * @Description: 
 */
export class ShopCarAddOneDTO{
    @ApiProperty({description:'商品id'})
    @IsNotEmpty({message:'id不能为空'})
    id:number
    @ApiProperty({description:'shoperid'})
    @IsNotEmpty({message:'shoperid不能为空'})
    shoperid:number
    @ApiProperty({description:'susername'})
    @IsNotEmpty({message:'susername不能为空'})
    susername:string
    @ApiProperty({description:'类别选择'})
    @IsNotEmpty({message:'choose不能为空'})
    choose:string
    @ApiProperty({description:'加入购物车的数量'})
    @IsNotEmpty({message:'数量不能为空'})
    num:number
}
