/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-11 13:12:08
 * @LastEditTime: 2020-04-11 13:31:08
 * @LastEditors: Do not edit
 * @Description:
 */
export interface Films {
    coming:   Coming[];
    movieIds: number[];
}

export interface Coming {
    id?:              number;
    haspromotionTag?: boolean;
    img?:             string;
    version?:         string;
    nm?:              string;
    preShow?:         boolean;
    sc?:              number;
    globalReleased?:  boolean;
    wish?:            number;
    star?:            string;
    rt?:              string;
    showst?:          number;
    wishst?:          number;
    comingTitle?:     string;
}
