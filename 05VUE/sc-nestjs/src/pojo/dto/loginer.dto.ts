/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 12:23:39
 * @LastEditTime: 2020-04-20 00:07:06
 * @LastEditors: Do not edit
 * @Description: 
 */
import { IsNotEmpty, IsString, Length } from 'class-validator'
import { ApiProperty, ApiBearerAuth } from '@nestjs/swagger'

@ApiBearerAuth() //swapper jwt认证
export class LoginerInfoDTO {
    @ApiProperty({
        description: '用户名', // // swipper ui 记住login的用户名密码
        example: 'admin1',
    })
    @IsNotEmpty({ message: '用户名不能为空' })
    @IsString({ message: '用户名必须是 String 类型' })
    @Length(4, 20, { message: '用户名长度为4-20' })
    lusername?: string
    @ApiProperty({
        description: '密码', //// swipper ui 记住login的用户名密码
        example: 'Sccba601412;',
    })
    @IsNotEmpty({ message: '密码不能为空' })
    @Length(8, 25, { message: '密码长度为8-25' })
    lpassword?: string
}
