//主模块 汇集分模块 
//引入第三方库,必须在顶部
let uniq=require('uniq');

let module1=require('./modules/module1');
let module2=require('./modules/module2');
let {foo,bar,arr}=require('./modules/module3');

module1.foo();
module2();
foo();
bar();

let result=uniq(arr);//外部模块功能:根据第一位编码进行排序
console.log('====================================');
console.log(result);
console.log('====================================');

