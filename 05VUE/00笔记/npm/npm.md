<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-09 17:57:12
 * @LastEditTime: 2020-03-21 13:30:10
 * @LastEditors: Do not edit
 * @Description: 
 -->

# npm node package manager

     node在使用模块的名字来引入模块时,会首先在当前目录的node_modules中寻找是否含有改模块
        有如果则直接使用,如果没有则取上一级目录的node_modules中寻找
        如果一直没有,则找到磁盘根目录,还没有报错

## 更新依赖包

    npm outdated 检查更新
    npm install -g npm-check-updates 安装package检查更新模块
    ncu  检查更新
    npm-check-updates
    ncu -u 更新为最新版本
     npm update xxx 或指定更新 ,需要提前修改package中的版本号
    保险起见,更新完后,删除nodemodules并重新加载项目
    npm install

## 命令

    npx 运行全局模块时,需要加上此前缀
    npm-v 版本号
    npm version 所有模块的版本号
    npm 帮助说明
    npm search 包名 //  或者s

    npm install 包名 -registry=地址//从镜像源安装
    npm install(简写 i) math //安装某个包
        首先需要package.json否则乱装
    npm install 空 //自动安装当前项目依赖的包
    npm install 包名 -g //全局安装包(一般都是些工具)
    npm install name --save 安装并添加依赖  dependencies中添加  或者-S            生产化境
    npm install 名字 -D=npm install 名字 --save-dev devDependencies属性下添加依赖  开发环境
    npm install --production 只安装dependencies而不安装devDependencies

    npm init //引导创建 package.json文件 -f不用输入信息

    npm remove (r) 删除包
    npm uninstall 包名 -g（如果你安装用的是 npm install 包名 -g）
    npm uninstall 包名 --save（如果你安装用的是 npm install 包名 --save）
    npm uninstall 包名 --save-dev（如果你安装用的是 npm install 包名 --save-dev）


    npm uni -g 包名

    npm config set registryu 地址//设置镜像源

    更新你已经安装的NPM库，这个很简单，只需要运行。
    npm update -g

    //安装不同版本
    npm i webpack@版本号

    查看当前npm源：npm get registry

## 命令行更新node版本

    管理员运行 powershell然后输入:
    Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
    npm install -g npm-windows-upgrade
    npm-windows-upgrade

 

    第一步：清除npm缓存，执行命令：
    npm cache clean -f 
    第二步：安装n模块：
    npm install -g n
    n模块是专门用来管理nodejs版本d

    第三步：升级node.js到最新稳定版：
    n stable 
    查看node版本和node安装路径
    查看node版本

    $ node -v
    v8.9.0
    查看node安装路径
    $ which node

    /usr/local/bin/nod
    注意： 上述命令如果提示没权限，请在命令的前面加上sudo

## 安装及环境变量配置

    npm config set prefix “d:\nodejs\node_global”
    以及
    npm config set cache “d:\nodejs\node_cache”
    增加NOEDE_PATH(全局变量模块存放位置)
