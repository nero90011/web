/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-13 23:14:59
 * @LastEditTime: 2020-04-26 16:52:29
 * @LastEditors: Do not edit
 * @Description: 数据库连接文件
 */
import { Sequelize } from 'sequelize-typescript';
import db from '../../config/db';
import { User } from 'src/module/user/user.model';
import { Category } from 'src/module/category/category.model';
import { ShopCar } from 'src/module/shopcar/shopcar.model';
import { Order } from 'src/module/order/order.model';
import { Assess } from 'src/module/assess/assess.model';
const sequlize = new Sequelize(
  db.mysql.database,
  db.mysql.user,
  db.mysql.password || null,
  {
    host: db.mysql.host,
    port: db.mysql.port,
    dialect: 'mysql',
    pool: {
      max: db.mysql.connectionLimit,
      min: 0,
      acquire: 30000,
      // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
      idle: 10000,
    },
    timezone: '+08:00', //东八时区
  },
);

sequlize.addModels([User,Category,ShopCar,Order,Assess])
// 测试数据库连接
sequlize.authenticate().then(() => {
  console.log('连接成功');
}).catch((err:any)=>{
    console.log(err);
    throw err
})
export default sequlize
