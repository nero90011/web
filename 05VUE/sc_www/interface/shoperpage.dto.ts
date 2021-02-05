/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 15:01:34
 * @LastEditTime: 2020-04-22 14:51:48
 * @LastEditors: Do not edit
 * @Description: 
 */
export interface Result {
    code: number;
    msg:  string;
    data: ShoperPageData[];
}
export interface ShoperPageData {
    id:           number;
    name:         string;
    title:        string;
    from:         string;
    num:          number;
    money:        number;
    ishot:        number;
    imgs:         string;
    detsrcjson:   string;
    chooses:      string;
    assid:        null;
    userid:       number;
    username:    string;
    created:      string;
    updatedOn:    string;
    deletionDate: null;
    sort?:        number;
}
export interface Page{
    num:number
    size:number
}