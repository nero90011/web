<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 14:54:34
 * @LastEditTime: 2020-04-14 16:08:00
 * @LastEditors: Do not edit
 * @Description: 
 -->

# 1

## DTO

    DTO数据传输对象 是一种设计模式之间传输数据的软件应用系统

    定义 DTO 还有一个好处，那就是可以配合 Swagger 自动生成文档

## pipe

    nest g pipe name

    npm i class-validator class-transformer -S

    管道类似于拦截器 是传输过程中的关卡
    类型: 转换: 管道将输入数据转换为所需的数据输出
          验证: 对于输入数据进行验证,如果验证陈工继续传递,验证失败则抛出异常

    nest自带的pipe:
        validationpipe parseintpipe parsuuidpipe

    管道必须提供transform方法(value当前处理的参数,metadata元数据)

### 使用

    validation.pipe.ts中编写验证逻辑
    在controller中绑定管道 并指定DTO类型
    
    import { ValidationPipe } from '../../pipe/validation.pipe'; // 我们重写了validationPipe 请注意一定要引入我们自己的 不然可能从nestjs中自己引入就不生效了
    @UsePipes(new ValidationPipe()) // 使用管道验证
    async register(@Body() body: RegisterInfoDTO) { // 指定 DTO类型
