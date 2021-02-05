/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 16:30:02
 * @LastEditTime: 2020-04-14 16:34:14
 * @LastEditors: Do not edit
 * @Description: 
 */
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RbacInterceptor implements NestInterceptor {
  // role[用户角色]:  1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看 购买 取消购买 ）|4-店铺用户 (可以进行商品上架下架 新增 管理)
  constructor(private readonly role: number) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.getArgByIndex(1).req;
    if (req.user.role > this.role) {
      throw new ForbiddenException('对不起，您无权操作');
    }
    return next.handle();
  }
}