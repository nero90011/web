# nest.js

## Nestjs平台

    Express 是一个众所周知的 node.js 简约 Web 框架。 这是一个经过实战考验，适用于生产的库，拥有大量社区资源。 默认情况下使用 @nestjs/platform-express 包。 许多用户都可以使用 Express ，并且无需采取任何操作即可启用它。
    platform-fastify Fastify 是一个高性能，低开销的框架，专注于提供最高的效率和速度。 在这里阅读如何使用它。
    无论使用哪种平台，它都会暴露自己的应用程序界面。 它们分别被视为 NestExpressApplication 和 NestFastifyApplication。

    将类型传递给 NestFactory.create() 方法时，如下例所示，app 对象将具有专用于该特定平台的方法。 但是，请注意，除非您确实要访问底层平台API，否则无需指定类型。

    const app = await NestFactory.create(ApplicationModule);

## 组件

### cookie

    用户可以删除cookie，或者禁用它， cookie可以被篡改， cookie可以用于攻击， cookie存储量很小。未来实际上要被localStorage替代

    1.安装

    cnpm instlal cookie-parser --save
    2.在main.ts中引入cookie-parser

    import * as cookieParser from 'cookie-parser'
    3.在main.ts配置中间件

    app.use(cookieParser());
    4.设置cookie

    res.cookie("name",'zhangsan',{maxAge: 900000, httpOnly: true}); 

    //HttpOnly 默认false不允许 客户端脚本访问
    5、获取Cookies

    @Get('getCookies')    
    getCookies(@Request() req){
        return req.cookies.name;
    }

## database

### mysql

    npm install --save @nestjs/typeorm typeorm mysql
    或者
    npm i sequelize sequelize-typescript mysql2 -S

    时间处理
    npm install moment --save
    console.log(moment(new Date()).format('YYYY-MM-DD HH:mm:ss'))

## jwt

    Passport是最流行的node.js身份验证库，
    npm install --save @nestjs/passport passport passport-local
    npm install --save-dev @types/passport-local 

    或者
    npm install --save @nestjs/passport passport passport-jwt
    npm install --save-dev @types/passport-jwt

    直接:
    npm install passport passport-jwt passport-local @nestjs/passport @nestjs/jwt -S

    1.组特定于该策略的选项。例如，在JWT策略中，您可以提供一个秘令来对令牌进行签名。
    2."验证回调"，在这里您可以告诉Passport如何与您的用户存储交互(在这里您可以管理用户帐户)。在这里，验证用户是否存在(或创建一个新用户)，以及他们的凭据是否有效。Passport库期望这个回调在验证成功时返回完整的用户消息，在验证失败时返回null(失败定义为用户没有找到，或者在使用Passport-local的情况下，密码不匹配)。

    nest g module auth
    nest g service auth
    nest gmodule users
    nest g service users