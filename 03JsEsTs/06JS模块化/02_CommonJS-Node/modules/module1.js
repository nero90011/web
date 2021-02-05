/*
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2019-06-12 11:07:47
 * @LastEditTime: 2019-08-06 16:29:44
 * @LastEditors: Do not edit
 * @Description: 
 */
//module.exports=value 暴露一个对象
module.exports={
    msg:'module1',
    foo(){
        console.log(this.msg);
        
    }
};