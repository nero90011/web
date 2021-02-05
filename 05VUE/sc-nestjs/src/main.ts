/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 14:30:12
 * @LastEditTime: 2020-04-29 21:11:00
 * @LastEditors: Do not edit
 * @Description: 应用程序入口文件
 */
// 要创建一个 Nest 应用实例，我们使用了 NestFactory 核心类。NestFactory 暴露了一些静态方法用于创建应用实例
import { NestFactory } from '@nestjs/core'
import { AppModule } from './module/app/app.module'
import { logger } from './fmpi/middleware/logger/logger.middleware'
import * as express from 'express'
import { TransformInterceptor } from './fmpi/interceptor/transform.interceptor'
import { HttpExceptionFilter } from './fmpi/filter/http-exception.filter'
import { AllExceptionsFilter } from './fmpi/filter/any-exception.filter'

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
    //create() 方法返回一个实现 INestApplication 接口的对象
    //app 对象将具有专用于该特定平台的方法。NestFactory.create(ApplicationModule);
    // 但是，请注意，除非您确实要访问底层平台API，否则无需指定类型。
    const app = await NestFactory.create(AppModule)
    //设置全局路由前缀
    app.setGlobalPrefix('api')
    // 跨域处理
    app.enableCors({
        origin: ['http://shop.sc.test','http://www.sc.test','http://www.nero90011.xyz','http://www.nero90011.xyz:3002','http://www.nero90011.xyz:3001'],
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders:'*',  //['Content-Type', 'Authorization']
    })
    // 静态文件配置
    // 使用中间件 打印日志 使用express将请求参数处理
    app.use(express.json()) // For parsing application/json
    app.use(express.urlencoded({ extended: true })) // For parsing application/x-www-form-urlencoded
    app.use(logger)
    // 使用全局拦截器打印参数
    app.useGlobalInterceptors(new TransformInterceptor())
    // 过滤处理HTTP异常信息 以及其他异常信息 AllExceptionsFilter 要在 HttpExceptionFilter 的上面，否则 HttpExceptionFilter 就不生效了，全被 AllExceptionsFilter 捕获了。
    app.useGlobalFilters(new AllExceptionsFilter())
    app.useGlobalFilters(new HttpExceptionFilter())
    // swapper 打印接口
    /* const options = new DocumentBuilder()
        .addBearerAuth() // 开启bearerauth授权认证
        .setTitle('api')
        .setDescription('api docs')
        .setVersion('1.0')
        .addTag('test')
        .build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api-doc', app, document) */
    // 监听3000端口
    await app.listen(3000)
}
bootstrap()
