<!--
 * @Author: liuZiHao Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-03-12 18:26:53
 * @LastEditTime: 2020-03-12 19:34:39
 * @LastEditors: Do not edit
 * @Description: 
 -->

# 步骤

  1. docker pull node:latest

  2. 挂载外部配置和数据
      创建i:/node

  3. docker run -itd --name mynode01 node:latest
  4. docker exec -it mynode01 /bin/bash
  5. docker rm -f mynode01
  6. docker run --restart=always --name mynode01 -v /i/node:/usr/program -p 9000:9000 -itd node:latest
  7. docker logs mynode01
  8. docker exec -it mynode01 /bin/bash
