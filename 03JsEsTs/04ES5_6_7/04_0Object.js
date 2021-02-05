/* 
for of  将对象转成数组: 注意 转成数组之后  他的index 是string类型的而不是number类型的
es5 及原生
    对象创建
    3. Object.create(prototype, [descriptors]) *
        作用: 以指定对象为原型创建新的对象 *
        为新的对象指定新的属性, 并对属性进行描述 -
        value: 指定值 -
        writable: 标识当前属性值是否是可修改的, 默认为false -
        configurable: 标识当前属性是否可以被删除 默认为false -
        enumerable： 标识当前属性是否能用for in 枚举 默认为false
    对象属性扩展
    4. Object.defineProperties(object, descriptors) *
        作用: 为指定对象定义扩展多个属性 *
        get： 用来获取当前属性值得回调函数 *
        set： 修改当前属性值得触发的回调函数， 并且实参即为修改后的值 *
        存取器属性： setter, getter一个用来存值， 一个用来取值
    5.对象本身的两个方法
        get propertyName() {}
        用来得到当前属性值的回调函数
        set propertyName() {}
         用来监视当前属性值变化的回调函数

es6简化的对象写法
    省略同名的属性值key和value变量名字相同可以省略不写
    省略方法的function可以省略函数的function 直接写方法名
    let x = 1;
    let y = 2;
    let point = {
        x,
        y,
        setX (x) {this.x = x}
    };

es6
    1.Object.is(v1, v2) 判断2个数据是否完全相等
    2. Object.assign(target, source1, source2..) 
      为对象添加属性 为对象添加方法 克隆对象 合并多个对象将多个对象合并到某个对象。 为属性指定默认值
    4.原型链操作
        原型链操作obj2.__proto__ 直接操作 __proto__ 属性加到隐式原型链上Object.setPrototypeOf()不建议使用(从语义 兼容性角度考虑): 而是使用
        1.Object.setPrototypeOf(现有对象a, 原型对象b); 将a的原型设置为对象b, 因此a可以共享b的属性 ES6 正式推荐的设置原型对象的方法
        Object.setPrototypeOf() //写操作
        ES6 正式推荐的设置原型对象的方法。
            Object.setPrototypeOf(现有对象a, 原型对象b);// a可以共享b的属性 模拟new 作用与__proto__相同，设置一个对象的prototype对象， 返回参数对象本身。
        2.Object.getPrototypeOf() //读操作返回参数对象的原型,是获取原型对象的标准方法
            Object.getPrototypeOf(f) === F.prototype
        3.Object.create() //生成操作代替
    5.keys values entries
        1.Object.entries 键值对转对象  将对象转为真正的 Map 结构。
        const map = new Map(Object.entries(obj));
        2.Object.fromEntries() 方法是Object.entries() 的逆操作，用于将一个键值对数组转为对象。 将键值对数据结构还原为对象，特别适合将Map结构抓华为对象另一个用处是配合URLSearchParams对象， 将查询字符串转为对象
        Object.fromEntries(new URLSearchParams('foo=bar&baz=qx'));
    6. 对象是否为空 3中方法
        1.JSON.stringify(obj0) === '{}'
        2.Object.keys(obj0).length === 0
        3.function judgeObj(obj) {
            for (const attr in obj) {
                return true; //不空
            }
            return false; //空对象
        }
    7.对象是否有此属性
        Object.isPrototypeOf方法, 用来判断该对象是否为参数对象的原型
        Object.hasOwnProperty('toString') 返回一个布尔值 判断某个属性是否在对象自身 还是的定义在原型链上
        ES5 的Object.getOwnPropertyDescriptor() 方法会返回某个对象属性的描述对象
        ES2017 引入了Object.getOwnPropertyDescriptors() 方法，返回指定对象所有自身属性（ 非继承属性） 的描述对象。
    8.遍历对象
        for... infor...in循环遍历对象自身的和继承的可枚举属性（ 不含 Symbol 属性）。
        Object.keys返回一个数组， 包括对象自身的（ 不含继承的） 所有可枚举属性（ 不含 Symbol 属性） 的键名。
        Object.getOwnPropertyNames(obj)Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（ 不含 Symbol 属性，但是包括不可枚举属性） 的键名。
        Object.getOwnPropertySymbols(obj)Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
        Reflect.ownKeys(obj)Reflect.ownKeys返回一个数组， 包含对象自身的所有键名，不管键名是 Symbol 或字符串， 也不管是否可枚举。
        //以上的 5 种方法遍历对象的键名， 都遵守同样的属性遍历的次序规则。
        // 首先遍历所有数值键， 按照数值升序排列。
        // 其次遍历所有字符串键， 按照加入时间升序排列。
        // 最后遍历所有 Symbol 键， 按照加入时间升序排列。


...运算符:合并对象

*/


/* 
  常用
*/
//1.合并对象
const mergedObject = {
    ...objectOne,
    ...objectTwo
};

const mergedObject1 = {
    ...{
        name: 'Jhon',
        age: '18'
    },
    ...{
        name1: 'jhon1',
        age1: '12'
    }
};
// {name: "Jhon", age: "18", name1: "jhon1", age1: "12"}

const mergedObject2 = {
    ...{
        name: 'Jhon',
        age: '18'
    },
    ...{
        name: 'jhon1',
        age: '12'
    }
};
// {name: "jhon1", age: "12"}


/* 
    es5
*/
var obj = {
    firstName: 'curry',
    lastName: 'stephen',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName(data) {
        var names = data.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
};
console.log(obj);
obj.fullName = '123 456';
console.log(obj.fullName);
var obj = {
    username: '123',
    age: 30
};
var obj1 = {};
// 以指定对象为原型创建新对象 添加新属性,并描述
obj1 = Object.create(obj, {
    sex: {
        value: '男',
        writable: true,
        configurable: true,
        enumerable: true
    }
});
console.log(obj1.sex);
obj1.sex = '女';
console.log(obj1.sex);
delete obj1.sex;
console.log(obj1);
for (var key in obj1) {
    console.log(key);
}
// 2defineProperties为指定对象定义扩展多个属性
var obj2 = {
    firstName: 'kobe',
    lastName: 'bryant'
};
Object.defineProperties(obj2, {
    fullName: {
        get: function() { // 获取扩展属性值时,get方法自动调用
            return this.firstName + '' + this.lastName;
        },
        set: function(data) {
            var names = data.split(' ');
            this.firstName = names[0];
            this.lastName = names[1];
        }
    }
});
console.log(obj2.fullName);
// obj2.fullName.set('xiugaile')
// obj2.fullName='xiugaile2'
// console.log(obj2.fullName)

/* 

    Es6

*/

/* 

    Object.is(v1, v2)

*/
//1.Object.is(v1, v2) 判断2个数据是否完全相等
console.log(Object.is('abc', 'abc')); //true
console.log(NaN == NaN); //false
console.log(Object.is(NaN, NaN)); //true
console.log(0 == -0); //true
console.log(Object.is(0, -0)); //false

/* 

    Object.assign(target, source1, source2..) 

*/
//2. Object.assign(target, source1, source2..) 
    //为对象添加属性 为对象添加方法 克隆对象 合并多个对象将多个对象合并到某个对象。 为属性指定默认值

//2.1为对象添加属性
    let obj10 = {
    name: 'kobe',
    age: 39,
    c: {
        d: 2
    }
};
let obj11 = {};
Object.assign(obj11, obj);
console.log(obj11, obj11.name);
class Point {
    constructor(x, y) {
        Object.assign(this, {
            x,
            y
        });
    }
}
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2) {},
    anotherMethod() {}
});
    // 等同于下面的写法
SomeClass.prototype.someMethod = function(arg1, arg2) {};
SomeClass.prototype.anotherMethod = function() {};
    //上面代码使用了对象属性的简洁表示法， 直接将两个函数放在大括号中， 再使用assign方法添加到SomeClass.prototype之中。

//2.2.clone :克隆对象

function clone(origin) {
    return Object.assign({}, origin);
}
    //不过， 采用这种方法克隆， 只能克隆原始对象自身的值， 
    //不能克隆它继承的值。 如果想要保持继承链， 可以采用下面的代码。
function clone1(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}
//2.3 合并多个对象 将多个对象合并到某个对象。

const merge =
    (target, ...sources) => Object.assign(target, ...sources);
    //如果希望合并后返回一个新对象， 可以改写上面函数， 对一个空对象合并。

const merge1 =
    (...sources) => Object.assign({}, ...sources);
//2.4 为属性指定默认值

const DEFAULTS = {
    logLevel: 0,
    outputFormat: 'html'
};
function processContent(options) {
    options = Object.assign({}, DEFAULTS, options);
    console.log(options);
    // ...
}
    //上面代码中， DEFAULTS对象是默认值， options对象是用户提供的参数。 Object.assign方法将DEFAULTS和options合并成一个新对象， 如果两者有同名属性， 则options的属性值会覆盖DEFAULTS的属性值。
    //注意， 由于存在浅拷贝的问题， DEFAULTS对象和options对象的所有属性的值， 最好都是简单类型， 不要指向另一个对象。 否则， DEFAULTS对象的该属性很可能不起作用。
const DEFAULTS1 = {
    url: {
        host: 'example.com',
        port: 7070
    },
};
processContent({
    url: {
        port: 8000
    }
})
    //上面代码的原意是将url.port改成 8000， url.host不变。 实际结果却是options.url覆盖掉DEFAULTS.url， 所以url.host就不存在了。

/*

    keys value entires 遍历对象属性,将对象转成Map
    
*/
let {
    keys,
    values,
    entries
} = Object;
for (const key of keys(obj5)) {
    console.log(key);
}
for (const value of values(obj5)) {
    console.log(value);
}
for (const [key, value] of entries(obj5)) { //entries遍历对象属性
    console.log(
        `${JSON.stringify(key)}:${JSON.stringify(value)}`
    );
}
const map11 = new Map(entries(obj5)); //entries将对象转成Map

const obj6 = {
    100: 'a',
    2: 'b',
    7: 'c'
};
console.log(Object.values(obj6)); //属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是 b、c、a。


Object.values(42) // []//如果参数不是对象，Object.values 会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values 会返回空数组。
Object.values(true) // []




/* 
    es6 原型链操作

*/
//3原型链操作obj2.__proto__ 直接操作 __proto__ 属性加到隐式原型链上Object.setPrototypeOf()
//3.1不建议使用(从语义 兼容性角度考虑): 而是使用
let obj3 = {};
obj3.__proto__ = obj1;
//3.2 Object.setPrototypeOf(现有对象a, 原型对象b); 将a的原型设置为对象b, 因此a可以共享b的属性 ES6 正式推荐的设置原型对象的方法
Object.setPrototypeOf() //写操作
Object.setPrototypeOf(现有对象a, 原型对象b);
    // 将a的原型设置为对象b, 因此a可以共享b的属性
    // new命令可以使用Object.setPrototypeOf方法模拟
    // 此方法的作用与__proto__相同，
    // 用来设置一个对象的prototype对象， 返回参数对象本身。
    // 它是 ES6 正式推荐的设置原型对象的方法。
    // Object.setPrototypeOf方法配套，
    // 用于读取一个对象的原型对象。
//3.3
Object.getPrototypeOf() //读操作
bject.getPrototypeOf(); //返回参数对象的原型,
    // 是获取原型对象的标准方法
Object.getPrototypeOf(f) === F.prototype
    // 推荐使用比_proto_和constructor.prototype要好
Object.create() //生成操作代替

//4.Object.keys() object.values() 
Object.values()
//5.Object.entries 键值对转对象  将对象转为真正的 Map 结构。
const map = new Map(Object.entries(obj));
//6.Object.fromEntries() 方法是Object.entries() 的逆操作，用于将一个键值对数组转为对象。 将键值对数据结构还原为对象，特别适合将Map结构抓华为对象另一个用处是配合URLSearchParams对象， 将查询字符串转为对象
Object.fromEntries(new URLSearchParams('foo=bar&baz=qx'));


/* 

    对象是否为空

*/
JSON.stringify(obj0) === '{}'

Object.keys(obj0).length === 0

function judgeObj(obj) {
    for (const attr in obj) {
        return true; //不空
    }
    return false; //空对象
}

/* 

    对象是否有此属性

*/
// 2.1 Object.isPrototypeOf方法, 用来判断该对象是否为参数对象的原型
// 2.2 Object.hasOwnProperty('toString') 返回一个布尔值 判断某个属性是否在对象自身 还是的定义在原型链上
// 属性获取:ES5 的Object.getOwnPropertyDescriptor() 方法会返回某个对象属性的描述对象
// ES2017 引入了Object.getOwnPropertyDescriptors() 方法，返回指定对象所有自身属性（ 非继承属性） 的描述对象。
let obj00 = {
    name: 'jack',
    age: 289
};
console.log('====================================');
console.log('name' in obj00);
console.log(obj00.hasOwnProperty('name'));
console.log(obj00['123']);
if (obj00['123']) {
    console.log('有123属性');
} else {
    console.log('没有123属性');
}
console.log('====================================');


/* 

    es6遍历对象

*/

// for... infor...in循环遍历对象自身的和继承的可枚举属性（ 不含 Symbol 属性）。

// Object.keys返回一个数组， 包括对象自身的（ 不含继承的） 所有可枚举属性（ 不含 Symbol 属性） 的键名。

// Object.getOwnPropertyNames(obj)Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（ 不含 Symbol 属性，但是包括不可枚举属性） 的键名。

// Object.getOwnPropertySymbols(obj)Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

// Reflect.ownKeys(obj)Reflect.ownKeys返回一个数组， 包含对象自身的所有键名，不管键名是 Symbol 或字符串， 也不管是否可枚举。

//以上的 5 种方法遍历对象的键名， 都遵守同样的属性遍历的次序规则。
// 首先遍历所有数值键， 按照数值升序排列。
// 其次遍历所有字符串键， 按照加入时间升序排列。
// 最后遍历所有 Symbol 键， 按照加入时间升序排列。






/* 


    自己实现entries方法 


*/
// Generator函数的版本
function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

// 非Generator函数的版本
function entries(obj) {
    let arr = [];
    for (let key of Object.keys(obj)) {
        arr.push([key, obj[key]]);
    }
    return arr;
}




/* es6指定位置对象中加入新属性 */
