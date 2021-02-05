import { User } from "../entity/User";

/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 12:25:33
 * @LastEditTime: 2020-04-14 16:13:46
 * @LastEditors: Do not edit
 * @Description: 
 */
export interface codemsg{
    code?:number
    user?:null|User
    msg?:string
    data?:null|Object
}
