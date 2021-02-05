import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 20:53:45
 * @LastEditTime: 2020-04-20 20:56:26
 * @LastEditors: Do not edit
 * @Description: 
 */
export class FindBabyById{
    @ApiProperty({description:'商品id'})
    @IsNotEmpty({message:'id不能为空'})
    id:number
}
