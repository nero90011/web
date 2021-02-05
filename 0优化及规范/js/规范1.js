/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-08-09 15:11:31
 * @LastEditTime: 2019-09-03 10:10:32
 * @LastEditors: Do not edit
 * @Description:
 */
/*
   1.区块
        1.建议总是使用大括号表示区块。

        2.
        return
        {
        key: value
        };

        // 相当于
        return;
        {
        key: value
        };
        因为 JavaScript 会自动添加句末的分号，导致一些难以察觉的错误。
        所以大括号跟在关键字后面
*/

/* 字符的使用
        1.括号:
            表示函数调用时，函数名与左括号之间没有空格。

            表示函数定义时，函数名与左括号之间没有空格。

            其他情况时，前面位置的语法元素与左括号之间，都有一个空格。
        2.分号,不好说,看情况
            这种语法特性被称为“分号的自动添加”（Automatic Semicolon Insertion，简称 ASI）。
            小括号,中括号开头要在开头加上分号
        3.不使用自增自减运算符
        4.单引号双引号:
            从代码编译的角度说的话，
            单引号在JS中被浏览器（IE，Chrome，Safari）编译的速度更快
            （在FireFox中双引号更快）。
            不管是单引号还是双引号，里面都可以套相反的引号,但是不可以双引号里面套单引号，这个单引号再套双引号，这是不行的。
            JSON中必须使用双引号

            静态字符串一律使用单引号或者反引号,不使用双引号
            动态字符串使用反引号
        5逗号  对象
            1.
            单行定义对象最后不加窦航
            多行定义对象,最后加逗号

            2.
            对象尽量静态化,一但定义不可随意添加新的属性
            如果要添加属性不可避免使用Object.assign方法添加
            // bad
            const a = {};
            a.x = 3;

            // if reshape unavoidable
            const a = {};
            Object.assign(a, { x: 3 });

            // good
            const a = { x: null };
            a.x = 3;

            3.
            动态属性名创造对象 使用属性表达式定义
            // good
            const obj = {
            id: 5,
            name: 'San Francisco',
            [getKey('enabled')]: true,
            };
            4.对象的属性方法尽量使用简洁表达式法,而不是function
*/
// bad
// const a = "foobar";
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
const b = `foo${a}bar`;
// acceptable
const c = 'foobar';
// good
const d = 'foobar';
// eslint-disable-next-line no-undef
const e = `foo${a}bar`;


/* 变量
        1.全局变量:使用大写表示,进行区分
        2.变量声明提升,var才有
        3.使用let代替var
            全局环境中,不应该设置变量,只应该设置常亮const,符合函数编程想,不改变值,只是新建值
            有利于将来分布式运算,且const会被优化
            所有的函数都因应该设置为常量
*/


/*
    不使用switch...case
    使用对象结构
*/
const actions = {
  hack() {
    return 'hack';
  },
  slash() {
    return 'slash';
  },
};

function doAction(action) {
  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action');
  }
  return actions[action]();
}
doAction('hack');
/* 数组
    1.使用...拷贝数组  [...items]
    2.使用Array.from方法,讲类数组转化为数组
*/
/* 函数
    1.立即执行函数可以写成箭头函数的形式
        (()=>{
            console.log('====================================');
            console.log('hello world!');
            console.log('====================================');
        })()
    2.匿名函数当参数的场合尽量使用箭头函数代替
        [1,2,3].map(x=>x*x);
    3.不在使用_this/thiat/self绑定 this

        const boundMethod =method.bind(this);
        改为
        const boundMethod =(...params)=>method.apply(this,params);
    4.简单的、单行的、不会复用的函数，建议采用箭头函数。
        如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。
    5.所有的配置项都应该集中在一个对象中,放在最后一个形参
        function divide(a,b,{option=false}={}){}
    6.不再使用arguments而是使用rest运算符代替
        因为后者是真数组
    7.使用默认值语法设置函数参数的默认值。

        // bad
        function handleThings(opts) {
        opts = opts || {};
        }

        // good
        function handleThings(opts = {}) {
        // ...
        }
*/
/* 对象和map
        注意区分 Object 和 Map，只有模拟现实世界的实体对象时，
        才使用 Object。如果只是需要key: value的数据结构，
        使用 Map 结构。
        因为 Map 有内建的遍历机制。
*/
/* 类
     总是用 Class，取代需要 prototype 的操作。
     因为 Class 的写法更简洁，更易于理解。
     使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。
        class PeekableQueue extends Queue {
        peek() {
            return this._queue[0];
        }
        }
*/
/* 模块化
        使用import取代require。
        使用export取代module.exports。
        如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，export default与普通的export不要同时使用。
        不要在模块输入中使用通配符*
        如果模块默认输出一个函数，函数名的首字母应该小写。
        如果模块默认输出一个对象，对象名的首字母应该大写。
*/

/* 代码风格检测工具eslint:
        使用:
            0 npm init
            1.npm i -g eslint
            2.安装 Airbnb 语法规则，以及 import、a11y、react 插件
                $ npm i -g eslint-config-airbnb
                $ npm i -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
            3.项目的根目录下新建一个.eslintrc文件，配置 ESLint。
            {
            "extends": "eslint-config-airbnb"
            }
            4.$ eslint --init
            eslint --init
            ? How would you like to configure ESLint? Use a popular style guide
            ? Which style guide do you want to follow? Airbnb (https://github.com/airbnb/javascript)
            ? Do you use React? No
            ? What format do you want your config file to be in? JavaScript
            5.eslint 文件地址

*/
