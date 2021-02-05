/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-16 18:41:17
 * @LastEditTime: 2020-04-17 21:19:47
 * @LastEditors: Do not edit
 * @Description:
 */

import { v5 as uuidv5, v4 as UUIDv4 } from 'uuid'
import * as Fs from 'fs'
import * as Minio from 'minio'
import { BUCKETNAME } from 'src/config/minio'

export const minioClient: Minio.Client = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'nero',
    secretKey: 'loveangellzh1234',
})
minioClient.bucketExists(BUCKETNAME,function(error,result){
    if(error){
        console.log(error);
    }else{
        console.log('wwwsctest存在,minio连接成功',result);
    }
})
// //获取文件
// let file = __dirname + '/user.jpg'
// let fileStream = Fs.createReadStream(file)
// //指定存储路径
// let now =
//     new Date()
//         .toLocaleDateString()
//         .split('-')
//         .join('/') + '/'
// // 文件用uuid命名
// let filename = uuidv5(file, UUIDv4()).split('-').join('') + file.substring(file.lastIndexOf('.'))
// // 最终路径+文件名
// let final = now + filename
// // 传文件到minio
// console.log(final)
// const fileStat = Fs.stat(file, function(err, stats) {
//     if (err) {
//         return console.log(err)
//     }
//     minioClient.putObject('wwwsctest', filename, fileStream, stats.size, {"Content-Type":"application/x-jpg"}, function(err, etag) {
//         return console.log(err, etag) // err should be null
//     })
// })

// async function UploadedFile() {
//     // 创建桶
//     let bo = await minioClient.bucketExists('wwwsctest')
//     if (!bo) {
//         await minioClient.makeBucket('wwwsctest', 'cn-north-1')
//         // 设置整个桶的访问策略为READWRITE
//         // await minioClient.setBucketPolicy(now,Minio.Policy.READWRITE)
//     }

// }
// UploadedFile()
