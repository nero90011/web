<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-03-12 21:29:07
 * @LastEditTime: 2020-04-18 11:20:22
 * @LastEditors: Do not edit
 * @Description: 
 -->

# 步骤
  
  1. docker pull redis
  2. 挂载外部配置和数据安装
  3. 新建容器用来挂载数据库文件,conf目录用来挂载配置文件
      docker run --name myredis01 -p 6379:6379 -d redis:latest

      docker exec -it myredis01 bash
  4. docker rm -f myredis01

  5. 挂载并启动
docker run --name myredis01 -p 6379:6379 --privileged=true --restart always -v /k/redis/data:/usr/redis/data -v /k/redis/redis.conf:/etc/redis/redis.conf -v /k/redis/redis.log:/var/log/redis/redis.log -d redis:latest /etc/redis/redis.conf --appendonly yes
