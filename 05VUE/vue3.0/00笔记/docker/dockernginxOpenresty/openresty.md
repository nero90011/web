<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-03-12 14:29:13
 * @LastEditTime: 2020-04-18 11:20:53
 * @LastEditors: Do not edit
 * @Description: 
 -->

# docker nginx

## 注意

    docker 反向代理宿主机ip应该设置为:gateway.docker.internal

## 配置

  1. docker pull openresty/openresty
  2. 挂载外部配置和数据安装
     创建 I:/openresty
  3. 新建容器mysql01用来获取默认生成的配置文件
    docker run --name mynginx01 -p 8989:80 openresty/openresty

  4. 使用命令拷贝到conf目录下
      docker cp myninx01:/usr/local/openresty/nginx i:/openresty
  
  6. 停止第一次的容器

     docker rm -f mysql01
  
  7. 挂载并启动

    docker run --restart=always  --privileged=true --name mynginx01 -v /k/openresty/nginx:/usr/local/openresty/nginx -v /k/openresty/conf.d/default.conf:/etc/nginx/conf.d/default.conf -p 80:80 -d openresty/openresty

  1. docker logs mynginx01
  2. docker exec -it mynginx01 bash
  3. 重启

       cd /usr/local/openresty/nginx/sbin/
       ./nginx -s reload
