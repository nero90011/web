/**
 * 16
 * 0x10
 * 0xff
 * 0xc0fe
 * 8
 * 0x70
 * 2
 * ob10
 * parseInt(a,进制数)
 * sth.toString(进制数)默认10进制
 * \u2620
 */
console.log('====================================');
console.log('\u2620');// 骷髅头  网页中&#2620
console.log('====================================');

/**
 * 运算符
 *  加号:任何值加string转成string 调用String()
 *  任何值-*除自动转换成number 调用Number()
 *  正号,负号:转为Number
 *  ||:两个值都为ture 返回后面的 第一个为true则返回一 否则返回二
 *  &&:两个值中有false,返回靠前的false 两个值都是ture返回靠后
 *
 */
console.log('====================================');
console.log(1 || 2, 1 || false, false || 2);// 1 1 2
console.log(1 && 2, 1 && false, false && 2, null && undefined);// 2 false false null
console.log('====================================');
