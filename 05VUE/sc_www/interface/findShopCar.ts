/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 23:30:03
 * @LastEditTime: 2020-04-22 12:22:40
 * @LastEditors: Do not edit
 * @Description: 
 */
// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface FindShopCarDTO {
    code: number;
    msg:  string;
    data: ShopCar[];
}

export interface ShopCar {
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
    imgs:    string;
    num:     number;
    ishot:   number;
    money:   number;
}
