<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-03-11 19:01:56
 * @LastEditTime: 2020-04-18 11:32:56
 * @LastEditors: Do not edit
 * @Description: 
 -->

# 步骤

  1. docker pull mysql/mysql-server
  2. 挂载外部配置和数据安装
     创建data目录用来挂载数据库文件，创建conf目录用来挂载配置文件
  3. 新建容器mysql01用来获取默认生成的配置文件
    docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:latest --default-authentication-plugin=mysql_native_password

  4. 使用命令拷贝到conf目录下
      docker cp mysql01:/etc/mysql/my.cnf I:/mysql/conf
  5. 修改并添加内容为:

  6. 停止第一次的容器
     docker rm -f mysql01
  6.1 新建mysql网络 docker
  7. 挂载并启动
docker run --name mysql01 -p 3306:3306 --network mysql01  --privileged=true --restart always -v /k/mysql/data:/var/lib/mysql/ -v /k/mysql/conf/my.cnf:/etc/mysql/my.cnf -e MYSQL_ROOT_PASSWORD=loveangellzh1234 -d mysql:latest --default-authentication-plugin=mysql_native_password
  7.2下一次通过容器重新挂载时不用再重新部署8,9步
  8. docker logs mysql01
        GENERATED ROOT PASSWORD: EDoMYGpEK*@hv@P[itoglYbd@kZ
  9. docker exec -it mysql01 bash
          mysql -u root -p

          EDoMYGpEK*@hv@P[itoglYbd@kZ

          ALTER USER USER() IDENTIFIED BY 'loveangellzh1234';

          use mysql;
          select user,host from user;

          #新建账号:
          create user 'nero'@'localhost' identified by 'loveangellzh1234'; 
          create user 'nero'@'%' identified by 'loveangellzh1234'; 

          #分配权限
          grant all privileges on*.* to 'nero'@'localhost' with grant option;
          grant all privileges on*.* to 'nero'@'%' with grant option;

          select user,host from user;
          #测试navicat连接
