/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-17 10:10:29
 * @LastEditTime: 2020-05-03 18:44:35
 * @LastEditors: Do not edit
 * @Description: 
 */
import { Injectable, BadRequestException } from '@nestjs/common';
import { minioClient } from 'src/util/minio/minio';
import { v5, v4 } from 'uuid';
import { BUCKETNAME } from 'src/config/minio';

@Injectable()
export class UploadService {
    
    private  readonly CONTENT_TYPE:Array<string>=["image/png","image/gif", "image/jpeg","image/x-icon"]
    
    async uploadImage(file: any){
        // 处理图片信息
        let filename = v5(file.originalname, v4()).split('-').join('') + file.originalname.substring(file.originalname.lastIndexOf('.'))
        let filebuffer=file.buffer
        let fileMimeType=file.mimetype
        // 检查文件类型
        if(!this.CONTENT_TYPE.includes(fileMimeType)){
            return {
                code:400,
                msg:'文件类型不合法'
            }
        }
        // 保存到文件服务器
        try {
            await minioClient.putObject(BUCKETNAME,filename,filebuffer,1024,{'Content-Type': fileMimeType})
            return {
                code:200,
                msg:'保存成功',
                // data:'https://www.nero90011.xyz:3001'+`/${BUCKETNAME}/`+filename
                data:'http://minio.sc.test'+`/${BUCKETNAME}/`+filename
            }
        } catch (error) {
            return {
                code:400,
                msg:`Service error:${error}`,
            }
        }
    }
    /**
     * @name: 删除图片
     * @param {type} 
     * @return: 
     */
    async deleteImageByfileName(filename:any){
        try {
            await minioClient.removeObject(BUCKETNAME,filename)
            return {
                code:200,
                msg:'删除成功'
            }
        } catch (error) {
            console.error(error)
            return {
                code:400,
                msg:'删除失败'
            }
        }
    }
    
}
