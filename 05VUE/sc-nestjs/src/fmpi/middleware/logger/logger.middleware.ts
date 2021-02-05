/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-14 14:08:33
 * @LastEditTime: 2020-04-14 14:15:53
 * @LastEditors: Do not edit
 * @Description:
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Logger } from 'src/util/log/log4js';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        const code = res.statusCode; // 响应状态码
        next();
        // 组装日志信息
        const logFormat = `Method: ${req.method} \n Request original url: ${req.originalUrl} \n IP: ${req.ip} \n Status code: ${code} \n`;
        // 根据状态码，进行日志类型区分
        if (code >= 500) {
            Logger.error(logFormat);
        } else if (code >= 400) {
            Logger.warn(logFormat);
        } else {
            Logger.access(logFormat);
            Logger.log(logFormat);
        }
    }
}

// 函数式中间件
export function logger(req: Request, res: Response, next: () => any) {
    const code = res.statusCode; // 响应状态码
    next();
    // 组装日志信息
    const logFormat = ` >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
          Request original url: ${req.originalUrl}
          Method: ${req.method}
          IP: ${req.ip}
          Status code: ${code}
          Parmas: ${JSON.stringify(req.params)}
          Query: ${JSON.stringify(req.query)}
          Body: ${JSON.stringify(
              req.body,
          )} \n  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        `;
    // 根据状态码，进行日志类型区分
    if (code >= 500) {
        Logger.error(logFormat);
    } else if (code >= 400) {
        Logger.warn(logFormat);
    } else {
        Logger.access(logFormat);
        Logger.log(logFormat);
    }
}
