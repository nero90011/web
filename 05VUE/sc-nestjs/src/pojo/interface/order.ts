/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-24 13:46:25
 * @LastEditTime: 2020-04-25 00:41:52
 * @LastEditors: Do not edit
 * @Description: 
 */
export interface ToBeOrder {
    id:           number;
    uid:          number;
    sid:          number;
    cid:          Category;
    num:          number;
    choose:       string;
    created:      string;
    updatedOn:    string;
    deletionDate: null;
    susername?:   string;
}

export interface Category {
    chooses: string;
    id:      number;
    title:   string;
    imgs:    Object;
    num:     number;
    ishot:   number;
    money:   number;
}