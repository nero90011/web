import { Table, Model, Column, DataType } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 00:06:44
 * @LastEditTime: 2020-04-20 02:22:36
 * @LastEditors: Do not edit
 * @Description: 
 */
export class AddBodyInfoDTO {
    @ApiProperty({description:'商品名'})
    @IsNotEmpty({ message: '商品名不能为空' })
    @IsString({ message: '商品名必须是 String 类型' })
    @Length(1, 50, { message: '商品名长度太短' })
    bname:string
    @IsNotEmpty({ message: '商品标题不能为空' })
    @ApiProperty({description:'商品标题'})
    btitle:string
    @IsNotEmpty({ message: '发货地不能为空' })
    @ApiProperty({description:'发货地'})
    bfrom:string
    @IsNotEmpty({ message: '数量不能为空' })
    @ApiProperty({description:'数量'})
    bnum:number
    @IsNotEmpty({ message: '价格不能为空' })
    @ApiProperty({description:'价格'})
    bmoney:number
    @IsNotEmpty({ message: '轮播图不能为空' })
    @ApiProperty({description:'轮播图'})
    imgs:string
    @IsNotEmpty({ message: '商品介绍图不能为空' })
    @ApiProperty({description:'商品介绍图'})
    detsrcjson:string
    @IsNotEmpty({ message: '商品可选规格不能为空' })
    @ApiProperty({description:'商品可选规格'})
    chooses:string

}