let module1=require('./module1');
let module2=require('./module2');
let {foo,bar}=require('./module3');


module1.foo;
module2();
foo();
bar();