<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 10:23:22
 * @LastEditTime: 2019-09-16 10:25:34
 * @LastEditors: Do not edit
 * @Description: 
 -->

# es6

    查看node对es6支持程度
        // Linux & Mac
        $ node --v8-options | grep harmony
        // Windows
        $ node --v8-options | findstr harmony
        
    查看浏览器对es6支持程度
        $ npm install -g es-checker
        $ es-checker

    es6转为es5
        $ npm install --save-dev @babel/core
