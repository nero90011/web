import { ApiBearerAuth, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length } from "class-validator";

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 14:01:54
 * @LastEditTime: 2020-04-20 17:02:26
 * @LastEditors: Do not edit
 * @Description: 
 */
@ApiBearerAuth() //jwt认证
export class ShopDTO{
    @ApiProperty({
        description:'页码'
    })
    @IsNotEmpty({message:'页码不能为空'})
    /* 页码 */
    num:number
    @IsNotEmpty({message:'每页长度不能为空'})
    @ApiProperty({
        description:'每页长度'
    })
    /* 每页长度 */
    size:number
}
