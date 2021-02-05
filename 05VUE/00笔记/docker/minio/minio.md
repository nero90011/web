# minio

## docker搭建minio

    docker run --privileged=true --restart always  -it  -d -p 9000:9000 --name minio -e "MINIO_ACCESS_KEY=nero" -e "MINIO_SECRET_KEY=loveangellzh1234" -v /k/minio/data:/data -v /k/minio/config:/root/.minio minio/minio server /data
