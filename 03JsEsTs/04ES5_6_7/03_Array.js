/* 
es5
1. Array.prototype.indexOf(value) : 得到值在数组中的第一个下标
2. Array.prototype.lastIndexOf(value) : 得到值在数组中的最后一个下标
3. Array.prototype.forEach(function(item, index){}) : 遍历数组
4. Array.prototype.map(function(item, index){}) : 遍历数组返回一个新的数组，返回加工之后的值
5. Array.prototype.filter(function(item, index){}) : 遍历过滤出一个新的子数组， 返回条件为true的值

es6
1. Array.from(v) : 将伪数组对象或可遍历对象转换为真数组
2. Array.of(v1, v2, v3) : 将一系列值转换成数组
3. find(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素
4. findIndex(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素下标

es7
1. 指数运算符(幂): **
2. Array.prototype.includes(value) : 判断数组中是否包含指定value

遍历方法: +es5 +es6
    //sort 排序数组,影响,unicode作为依据
    //map(fun)   遍历数组 用fun处理  结果放入新数组
    //some()，every() 它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。
    //some:有一个ture就行 every:所有都为true才行
    //reduce() reduceRight() 计算累计值 (加法)

基础:
    //构建时推荐使用数组字面量 因为Array构造函数行为不一致
    //0. Array.isArray 是否Array  弥补typeof运算符的不足
        会改变原数组
    //1 push 末尾添加不定量元素,返回数组新长度
    //2 pop 删除末尾最后一个元素,返回被删除的元素值  空数组不会报错 ,返回undefined
    //3 unshift 开头添加一个或多个,返回new length
    //4 shift 删除开头的元素 ,返回被删除元素值
    //5 indexof 不能发现NaN  lastindexof
    //6 slice() 提取指定元素,不改变原数组,返回新数组[begin,last)
    //slice方法的一个重要应用，是将类似数组的对象转为真正的数组。
    //7 splise 删除指定元素,影响原数组,返回删除元素/插入新元素
    //8 concat 连接数组.返回新数组,不影响原数组 接受其他类型的值作为参数添加到目标数组尾部
    //9 join array转换成string 返回string 不影响原数组
        //undefined或null或空位，会被转成空字符串。
        //通过call方法，这个方法也可以用于字符串或类似数组的对象。
        // Array.prototype.join.call('hello','-')
        console.log(array.join(",")); //参数为间隔符如果没有默认为逗号
    //10 reverser 反转数组 影响 无返回值

常用:
    快速创建数字数组
    获取数组交集
    多维数组转一维数组
    过滤对象数组
    数组去重
    数组对象去重

...运算符 
*/
/* 
    ...运算符 
*/
//1 将数组转为用逗号分隔的参数序列
[...document.querySelectorAll('div')]
//2 用于函数调用
const number = [4, 38];
add(...number);
//3 灵活使用:
f(-1, ...args, 2, ...[3]);
...(x > 0 ? ['a'] : []);
//注意:只有函数调用时,扩展运算符才可以放在括号中,否则报错
//4 代替apply方法
Math.max(...[14, 3, 7]);
arr1.push(...arr2);
//5 深克隆数组
const a2 = [...a1];
//6 数组合并 浅拷贝
[...arr1, arr2, arr3];
//7 与解构赋值结合,用于生成数组
const [first, ...rest] = [1, 2, 3, 4, 5];
//如果将扩展运算符用于数组赋值,只能凡在参数的最后一位,否则报错
//8 将字符串转化为真正的数组
[...'hello']
//只要定义了遍历器的接口对象都可以用扩展运算符转为正正的数组


/**
 * 常用:
 */
//快速创建数字数组
const numArray = Array.from(new Array(10), (x, i) => i);
//获取数组交集
const similarity = (arr, values) => arr.filter(v => values.includes(v));
console.debug([1, 2, 3], [1, 2, 4]); // [1,2]
//多维数组转一维数组
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
deepFlatten([1, [2],
    [
        [3], 4
    ], 5
]); // [1,2,3,4,5]
// 过滤对象数组
const reducedFilter = (data, keys, fn) => data.filter(fn).map(el => keys.reduce((acc, key) => {
    acc[key] = el[key];
    return acc;
}, {}));
const data = [{
        id: 1,
        name: 'john',
        age: 24
    },
    {
        id: 2,
        name: 'mike',
        age: 50
    }
];

let a = reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
//数组去重
const deDupe = (myArray) => [...new Set(myArray)];
console.debug(deDupe([1, 1, 2, 1, 3, 3, 4])); // [1, 2, 3, 4]
//数组对象去重
const uniqueElementsBy = (arr, fn) => arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
}, []);
uniqueElementsBy([{
    id: 1,
    name: 'Jhon'
}, {
    id: 2,
    name: 'sss'
}, {
    id: 1,
    name: 'Jhon'
}], (a, b) => a.id == b.id) // [{id: 1, name: 'Jhon'}, {id: 2, name: 'sss'}]

/* 
  基础
*/
//构建时推荐使用数组字面量 因为Array构造函数行为不一致
let array = Array.of(1, 2, 3, "nero");
console.log("====================================");
//0. Array.isArray 是否Array  弥补typeof运算符的不足
console.log(Array.isArray(array));
console.log(array.toString());

/* 会改变原数组 */
//1 push 末尾添加不定量元素,返回数组新长度
console.log(array.push(4, 5, 6, 7, 10));
//2 pop 删除末尾最后一个元素,返回被删除的元素值  空数组不会报错 ,返回undefined
console.log(array.pop());
//3 unshift 开头添加一个或多个,返回new length
console.log(array.unshift(0));
//4 shift 删除开头的元素 ,返回被删除元素值
console.log(array.shift());
console.log("====================================");

//5 indexof 不能发现NaN  lastindexof
console.log(array.indexOf("nero", 2));

//6 slice() 提取指定元素,不改变原数组,返回新数组
[0, 1, 2].slice(0, 1); //[begin,last)
//slice方法的一个重要应用，是将类似数组的对象转为真正的数组。

Array.prototype.slice.call({
    0: 'a',
    1: 'b',
    length: 2
})
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);

//7 splise 删除指定元素,影响原数组,返回删除元素/插入新元素
array.splice(0, 1);
array.splice(0, 0, ...[1, 2, 3, 4, 5]);
console.log(array);

//8 concat 连接数组.返回新数组,不影响原数组 接受其他类型的值作为参数添加到目标数组尾部

//9 join array转换成string 返回string 不影响原数组
//undefined或null或空位，会被转成空字符串。
//通过call方法，这个方法也可以用于字符串或类似数组的对象。
// Array.prototype.join.call('hello','-')
console.log(array.join(",")); //参数为间隔符如果没有默认为逗号

//10 reverser 反转数组 影响 无返回值

/*
 *遍历方法: +es5 +es6
 * 
 */
//11 sort 排序数组,影响,unicode作为依据
array.sort((a, b) => {
    return a - b; //升序
});
console.log(array);
//some()，every() 它们接受一个函数作为参数，所有数组成员依次执行该函数。该函数接受三个参数：当前成员、当前位置和整个数组，然后返回一个布尔值。

//some:有一个ture就行 every:所有都为true才行

//reduce() reduceRight() 计算累计值 (加法)


/*
  ES5新增
*/
let array1 = Array.of(1, 2, 3, "nero", 10, 40);
console.log("====================================");
//1 forEach
array1.forEach((value, index, arr) => {
    console.log(value, index, arr);
});
//2 map 返回新数组
let narr1 = array1.map((value, index, arr) => {
    return value + 10;
});
console.log(narr1);
//3 filter 返回新数组
let narr2 = array1.filter((value, index, arr) => {
    return value > 4;
});
console.log(narr2);
console.log("====================================");
/*
  ES6新增
*/
//1 Array.from(v) : 将伪数组对象或可遍历对象转换为真数组
//第二个参数:类型:function 对每个元素进行处理,将处理后的值放入返回的数组
let btns = document.getElementsByTagName("button");
console.log(btns.length); //3
Array.from(btns).forEach(function(item, index) {
    console.log(item, index);
    alert(item)
});
//es5中写法:
var arr1 = [].slice.call(arrayLike);
//常用 : 创建一个数组并用数字填充他,索引为0;
const numArray = Array.from(new Array(10), (x, i) => i);

//2 Array.of(v1, v2, v3) : 将一系列值转换成数组
// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]
let arr = Array.of(1, "abc", true);
console.log(arr);


//3 find(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素
let arr1 = [1, 3, 5, 2, 6, 7, 3];
let result = arr1.find(function(item, index) {
    return item > 3;
});
console.log(result); //5


//4 findIndex(function(value, index, arr){return true}) : 找出第一个满足条件返回true的元素下标
let result1 = arr1.findIndex(function(item, index) {
    return item > 3;
});
console.log(result1); //2


//5 find findIndex 查找NaN
[NaN].findIndex(y => Object.is(NaN, y));


//6 copyWithin(target,start,end) 从target位置开始替换数据 从start开始读取数据,end停止读取 都可为负数
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4); // 对于没有部署 TypedArray 的 copyWithin 方法的平台


//7 fill 使用给定值填充一个数组  浅拷贝
new Array(3).fill(7, 1, 2);
let arr3 = new Array(3).fill({
    name: "Mike"
});
arr3[0].name = "Ben"; // [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]
let arr4 = new Array(3).fill([]);
arr4[0].push(5); // [[5], [5], [5]]


//8 keys values entries


/* ES7 
includes 方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似 */
[1, 2, NaN].includes(NaN);
const contains = (() =>
    //不支持环境下的简易代替版本
    Array.prototype.includes ?
    (arr, value) => arr.includes(value) :
    (arr, value) => arr.some(el => el === value))();
contains(["foo", "bar"], "baz"); // => false
//10 flat(),flatMap() 将多维数组转化为一维数组 参数:number原数组几维 可以用Infinity表示无论原数组几维度,都转成一维数组
[1, , [2, [3]]]
.flat(Infinity) //[1,2,3] 如果元素组有空位,则跳过空位
[(2, 3, 4)].flatMap(x => [x, x * 2]); //相当于.map然后.flat
//11 es6空位处理,明确的将空位转为undefined 由于空位的处理规则非常不统一，所以建议避免出现空位。
