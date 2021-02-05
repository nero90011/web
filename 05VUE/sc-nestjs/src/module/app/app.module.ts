/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 14:30:12
 * @LastEditTime: 2020-04-26 17:26:57
 * @LastEditors: Do not edit
 * @Description: 应用程序的根模块
 */
import { Module } from '@nestjs/common'
import { UserModule } from '../user/user.module'
import { AuthModule } from '../auth/auth.module'
import { UploadModule } from '../upload/upload.module'
import { CategoryModule } from '../category/category.module'
import { ShopcarModule } from '../shopcar/shopcar.module'
import { OrderModule } from '../order/order.module'
import { AssessModule } from '../assess/assess.module'

@Module({
    imports: [
        // module注册处
        AuthModule,
        UserModule,
        UploadModule,
        CategoryModule,
        ShopcarModule,
        OrderModule,
        AssessModule,
    ],
    // user 和 auth互相引用 如果不在根modul导入则需要将其他策略引入 很麻烦
    controllers: [],
    providers: [],
})
export class AppModule {}
