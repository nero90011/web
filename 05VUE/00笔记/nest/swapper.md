<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 19:39:14
 * @LastEditTime: 2020-04-14 19:59:19
 * @LastEditors: Do not edit
 * @Description: 
 -->

# swapper 自动生成restful api文档

## 使用

    npm i @nestjs/swagger swagger-ui-express -S 


    // 处理跨域
    app.enableCors();

    // 静态文件托管
    app.useStaticAssets('uploads', { prefix: '/uploads' });

    // swagger配置
    const options = new DocumentBuilder()
        .setTitle('Nodejs + Vuejs 全栈项目-后台管理API')
        .setDescription('供后台管理界面调用的服务端API')
        .setVersion('1.0')
        // .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);

    // 监听3000端口
    await app.listen(3000);

## 添加dto

    在每个参数上
    @ApiProperty()
    使用 ApiPropertyOptional 装饰器来表示【可选】参数，这样就不用频繁写 required: false 了：
    @ApiPropertyOptional({
        description: '[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）',
    })

## controller

    通过前面的截图可以看到，所有的接口都在 Default 栏目下，接口多了之后，就很不方便查找了。
    我们可以根据 Controller 来分类，添加装饰器 @ApiTags 即可：
