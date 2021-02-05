/**
 * 
 */
class Person{
    constructor(name,age) {
        this._name=name;
        this._age=age;
    }
    get getName(){//只读
        return this._name;
    }
    /**
     * @param {any} name
     */
    set setName(name){//只写
        this._name=name;
    }
    //私有1.
    

}
let person=new Person('nero','22');
console.log('====================================');
console.log(person.getName);//加上get变成属性,不能加空格
person.setName='dante';//不是用() 而是=
console.log('====================================');
console.log(person.getName);
console.log('====================================');
// console.log(person.name);
console.log('====================================');
