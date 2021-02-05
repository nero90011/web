# controller

## 创建

    cd .....
    nest g controller TestController

    @Request() req
    @Response() res
    @Next() next
    @Session() req.session
    @Param(key?: string) req.params / req.params[key]
    @Body(key?: string) req.body / req.body[key]
    @Query(key?: string) req.query / req.query[key]    query中()为空时会获取所有的get传值
    @Headers(name?: string) req.headers / req.headers[name] 
