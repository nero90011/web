/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-15 17:36:33
 * @LastEditTime: 2020-04-15 17:38:03
 * @LastEditors: Do not edit
 * @Description: 自定义装饰器  从jwt->req 获取user
 */
import { createParamDecorator } from '@nestjs/common';
export const CurrentUser=createParamDecorator((data,req)=>req.user)
