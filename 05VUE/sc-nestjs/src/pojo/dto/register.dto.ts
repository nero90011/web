import { IsNotEmpty, IsString, IsNumber, IsMobilePhone, MinLength, MaxLength, Length, IsPhoneNumber, Equals } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 14:59:10
 * @LastEditTime: 2020-04-16 14:16:37
 * @LastEditors: Do not edit
 * @Description: nest 建议使用class 做dto
 */
export class RegisterInfoDTO {
    @ApiProperty({ description: '用户名长度为4-20' })
    @IsNotEmpty({ message: '用户名不能为空' })
    @IsString({ message: '用户名必须是 String 类型' })
    @Length(4, 20, { message: '用户名长度为4-20' })
    rusername: string

    @ApiProperty({ description: '密码长度为8-25' })
    @IsNotEmpty({ message: '密码不能为空' })
    @Length(8, 25, { message: '密码长度为8-25' })
    rpwd: string

    @ApiProperty()
    @IsNotEmpty({ message: '重复密码不能为空' })
    @Length(8, 25, { message: '密码长度为8-25' })
    reppwd: string

    @ApiProperty()
    @IsNotEmpty({ message: '手机号不能为空' })
    @IsPhoneNumber('CN', { message: '请填写正确的手机号' })
    rphone: number

    // 可以使用 ApiPropertyOptional 装饰器来表示【可选】参数
    @ApiProperty({ description: '[用户角色]:  1-管理员 |  2-普通用户（只能查看 购买 取消购买 ）|3-店铺用户 (可以进行商品上架下架 新增 管理)' })
    @IsNotEmpty({ message: '用户类型不能为空' })
    rpid: string
    @ApiPropertyOptional()
    rsalt?: string
}
