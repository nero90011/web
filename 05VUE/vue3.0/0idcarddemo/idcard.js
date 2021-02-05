/* eslint-disable no-console */
/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-12-08 10:01:45
 * @LastEditTime: 2020-12-24 09:48:27
 * @LastEditors: Do not edit
 * @Description:因保护设计，身份证成功读取后必须移出机具读取感应区或者取出插卡，
 *              否则下次连接硬件执行找卡会出现找卡失败情况
 *              若系统无法识别 USB 接口的机具，请尝试切换机具到主板 USB2.0 接口
 *              大头照解码可能需要配合机具厂商提供的 WltRS.dll 文件
 */
const idcr = require('idcard-reader');
const path = require('path');
const OPTS = {
    dllTxt: 'c:/sdtapi.dll',
    dllImage: 'c:/wltrs.dll',
    // 头像图片生成保存目录 空则使用系统临时目录
    imgSaveDir: path.resolve(__dirname, 'src/assets/imgs')
};


async function doinit() {
    let data = null;
    try {
        const devices = await idcr.init(OPTS);
        data = await idcr.read(devices[0]);
    } catch (error) {
        console.error(error);
    }
    return data;
}
doinit();
