/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-08-09 17:12:57
 * @LastEditTime: 2019-08-22 10:54:32
 * @LastEditors: Do not edit
 * @Description:
 */
/* 使用方法:
    eslint --init创建配置,继承推荐规则
    
    eslint 文件名

    eslint --fix检查和新规则等

   在js文件中使用注释来制定环境格式:
    /* eslint-env node, mocha *

    使用注释指定全局变量 防止eslint发出警告
    /* global var1, var2 *
    如果你想选择性地指定这些全局变量可以被写入(而不是只被读取)，那么你可以用一个 "writable" 的标志来设置它们:
    配置文件中:
      "globals": {
        "var1": "writable",
        "var2": "readonly",
        "Promise": "off" //禁用全局变量
      }

    使用注释指定规则开启与否
    /* eslint eqeqeq: "off", curly: "error" *
    如果一个规则有额外的选项，你可以使用数组字面量指定它们，比如：
    /* eslint quotes: ["error", "double"], curly: 2 *
    plugin1/rule1 表示来自插件 plugin1 的 rule1 规则
    

    使用eslint禁止规则块临时禁止规则出现警告
    /* eslint-disable no-alert, no-console
    /* eslint-enable no-alert, no-console*
    整个文件范围内不使用eslint:
    /* eslint-disable *
*/
module.exports = {
  
  /* 设置启用的环境 */
  env: {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "worker": true, //webworkers
    "jquery": true,
    "mongo": true,
    "webextensions": true,
  },

  /*继承 配置文件  
      参数:
        路径或共享配置名称
        或者字符串数组：每个配置继承它前面的配置
        "eslint:recommended" 的 extends 属性启用一系列核心规则，这些规则报告一些常见问题，在 规则页面 中被标记为 对号
  */
  extends: 'eslint-config-airbnb',
  
  /* "plugins": ["a-plugin"],
  "processor": "a-plugin/a-processor" */ //启用插件及其处理器//parser:'',//指定解析器

  /* 各类规则设置 */
  rules: {// off 和0代表关闭规则  1和warn代表劲爆级别的错误(不会导致程序退出)  2和error代表错误级别的错误(触发时程序会退出)
    'linebreak-style': [0, 'error', 'windows'],
  },

  /* 配置插件 字符串数组形式  设置文件指定处理器 */
  plugins: ['a-plugin'],
  override: [{
    "files": ["*.md"],
    "processor": "a-plugin/markdown"
  }, {
    "files": ["**/*.md/*.js"],
    "rules": {
      "strict": "off"
    }
  }],

  /* 设置杂项 */
  parserOptions: {
    "ecmaVersion": 6, //es版本
    "env": {
      "es6": true
    }, //自动启用es6语法 自动启用es6全局变量
    "sourceType": "script", //默认为script 可以设置为module
    "impliedStrict ": true, //启用全局严格模式
    /* "ecmaFeatures": {
      "jsx": true
    } */ //是否启用jsx
  },

  /* 配置文件设置 */
  eslintConfig:{
    "root":true,//这个文件是主配置文件
  },
  
};