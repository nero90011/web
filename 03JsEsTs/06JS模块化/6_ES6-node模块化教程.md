<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-09-16 15:22:34
 * @LastEditTime: 2019-09-16 16:24:30
 * @LastEditors: Do not edit
 * @Description: 
 -->
# es6import nodejs
  
    1.安装babel-cli和babel-preset-env
      npm install babel-cli  -D
      npm install babel-preset-env -D
      npm install --save-dev babel-preset-es2015  如果是es6
    2.使用方式:
      //test.js
      export const num = 0;
      export function foo() { }
      export default { 
        num,
        foo 
      }

      //demo.js
      import test from 'test';
      import { num } from 'test';
      import { foo } from 'test';
    3."scripts": {
        "start": "babel-node --presets env index.js"
      },
    4.npm start
    
    5.配合nodemon使用:监听代码文件的变动,自动重启服务
      npm install -g nodemon
      "scripts": {
          "start": "npx nodemon --exec babel-node --presets env index.js"
      },
      npm start
      debug模式下不支持import / export
