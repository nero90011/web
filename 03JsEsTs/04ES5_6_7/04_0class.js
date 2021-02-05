/**
私有属性或方法的实现方法:
    1._仅仅在命名上加以区别
    2.将私有方法一处模块,使用类中方法的call语句将其指向this
    3.使用Symbol 类的方法使用表达式定义 [Symbol('...')](){}
    4.提案:# 相当于private
    5.关于this的指向报错问题: 如果class中的函数互相调用 应使用 函数名1=()=>{} 函数名2=()=>{this.函数名1}  必须使用箭头函数解决此问题 否则thi可能指向其他对象!!!!!!!!!
    

    其他:new.target一般用在构造函数之中，
    返回new命令作用于的那个构造函数。
    如果构造函数不是通过new命令或
    Reflect.construct()调用的，
    new.target会返回undefined，
    因此这个属性可以用来确定构造函数是怎么调用的。
    使用:确保函数只能通过new命令调用

        返回当前Class
        由于子类继承父类时,会返回子类,
        可以写出不能独立使用,必须继承后才能使用的类

    
    判断继承与否:Object.getPrototypeOf(子类) === 父类

    super:
      当做函数调用时:代表父类的构造函数 想当于A.prototype.constructor.call(this)
      当做对象使用,在普通方法中,指向父类的原型对象,在静态方法中指向父类
*/

let biaodashi = "biaodashi";
class Person {
    //注意:浏览器可以使用静态属性,nodejs不可以
    static city = "city"; //定义实例属性方法一 写在此处比较简洁

    constructor(name, age) {
        //调用类的构造方法 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
        this.name = name; //定义实例属性方法二
        this.age = age; //实例的属性除非显示定义在其本身上(this)上.否则都是定义在原型上(class上)
    }

    showName() {
        //定义一般的方法  注意:在类的实例上面调用方法,就是在调用原型上的方法
        console.log(this.name, this.age);
    }
    /*//加上static关键字表示静态方法
      //(此方法不会被实例继承 而是通过类来调用)
      //静态方法的this指向类而不是实例
      //静态方法可以和费静态方法重名
      //可以被子类继承
      //可以被super调用 super.静态()
    */
    static showStatic() {
        console.log("静态方法");
    }

    [biaodashi]() {
        //类的属性名,可以采用表达式
        //doSomething;
        console.log("biaodashi");
    }

    get name() {
        //getter 和setter
        return this.name; //存值函数和取值函数是设置在属性的 Descriptor 对象上的
    }
    set name(gname) {
        this.name = gname;
    }
    //generator方法
    * getAll() {
        yield this.name;
        yield city; //实例属性city和其他方法同级,可以不写this
    }
}

Object.assign(Person.prototype, {
    //可以使用assign方法一次向类添加多个方法
    fangfa1() {},
    fangfa2() {}
});

console.log(typeof Person); //类的数据类型就是函数,类本身就指向构造函数

console.log(Person.prototype.constructor === Person); //constructor属性,直接指向类本身

console.log(Object.keys(Person)); //空 //类内部所有定义的方法,都是不可枚举的
console.log(Object.keys(Person.prototype));

Person.showStatic(); //使用类直接调用静态方法
console.log(Person.city); //使用类直接调用静态属性
console.log(Person.name); //实用类调用非静态属性

let person = new Person("kobe", 39); //创建对象  必须使用new 否则报错
console.log(person, person.showName());

console.log(
    //自身属性
    person.hasOwnProperty("name"),
    person.hasOwnProperty("toString"),
    person._proto_.hasOwnProperty("toString")
);
/**
 * 定义一个子类
 */
class StrPerson extends Person {
    phone = '123456';
    //当没有constructor时,会创建一个默认的并加上super方法获取父类this
    constructor(name, age, salary) { //调用父类的构造方法
        //子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造
        //只有使用了super获取了父类的this,才可以使用this,所有super和this的顺序必须对
        super(name, age);
        this.salary = salary;
    }
    showName() {
        //在子类自身定义方法
        console.log(this.name, this.age, this.salary);
    }
}
let str = new StrPerson("weide", 38, 1000000000);
console.log(str);
str.showName();

/* Class表达式 */
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};

/**
 * new.target
 */
//确保构造函数只能通过new命令调用:
function Person(name) {
    if (new.target === Person) {
        this.name = name;
    } else {
        throw new Error('必须使用new命令生成实例')
    }
}
//Class内部调用new.target,返回当前Class
//不能独立使用,必须继承后才能使用的类
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('本类不能实例化');
        }
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
    }
}