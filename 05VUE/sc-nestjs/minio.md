# minio

## 安装

    npm i @types/minio minio -S

## api

    /* 建立bucket 存储区域 */
    // minioClient.makeBucket('test1', 'us-east-1', function(err) {
    //     if (err) return console.log('Error creating bucket.', err)
    //     console.log('Bucket created successfully in "us-east-1".')
    // })
    /* 列出所有bucket*/
    // minioClient.listBuckets(function(err, buckets) {
    //     if (err) return console.log(err)
    //     console.log('buckets :', buckets)
    // })
    /* 删除bucket */
    // minioClient.removeBucket('test1', function(err) {
    //     if (err) return console.log('unable to remove bucket.')
    //     console.log('Bucket removed successfully.')
    // })
    /* 列出bucket 的所有存储对象 方法1*/
    // const stream1 = minioClient.listObjects('wwwsctest','', true)
    // stream1.on('data', function(obj) { console.log(obj) } )
    // stream1.on('error', function(err) { console.log(err) } )
    /* 列出bucket 的所有存储对象 方法2 */
    // const stream2 = minioClient.listObjectsV2('wwwsctest','', true,'')
    // stream2.on('data', function(obj) { console.log(obj) } )
    // stream2.on('error', function(err) { console.log(err) } )
    /* 列出bucket 的所有存储对象  方法3 */
    // var stream = minioClient.extensions.listObjectsV2WithMetadata('mybucket','', true,'')
    // stream.on('data', function(obj) { console.log(obj) } )
    // stream.on('error', function(err) { console.log(err) } )
    /* ___________________________________________________________________________________ */
    /* 上传对象listIncompleteUploads */
    // const Stream = minioClient.listIncompleteUploads('wwwsctest', '', true)
    // Stream.on('data', function(obj) {
    //   console.log(obj)
    // })
    // Stream.on('end', function() {
    //   console.log('End')
    // })
    // Stream.on('error', function(err) {
    //   console.log(err)
    // })
    /* 获取对象大小getObject 将对象下载为流。*/
    // let size = 0
    // minioClient.getObject('wwwsctest', 'user.jpg', function(err, dataStream) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   dataStream.on('data', function(chunk) {
    //     size += chunk.length
    //   })
    //   dataStream.on('end', function() {
    //     console.log('End. Total size = ' + size)
    //   })
    //   dataStream.on('error', function(err) {
    //     console.log(err)
    //   })
    // })
    /* 获取部分对象getPartialObject 将对象的指定范围字节下载为流*/
    // reads 30 bytes from the offset 10.
    // let size = 0
    // minioClient.getPartialObject('wwwsctest', 'user.jpg', 10, 30, function(err, dataStream) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   dataStream.on('data', function(chunk) {
    //     size += chunk.length
    //   })
    //   dataStream.on('end', function() {
    //     console.log('End. Total size = ' + size)
    //   })
    //   dataStream.on('error', function(err) {
    //     console.log(err)
    //   })
    // })

    /* 获取对象 fGetObject,下载对象并将其保存为本地文件系统中的文件*/
    // minioClient.fGetObject('wwwsctest', 'user.jpg', 'g:/tmp/user.jpg', function(err) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   console.log('success')
    // })
    /* 上传对象 putObject*/
    // let Fs = require('fs')
    // let file =__dirname+ '/timg.jpg'
    // console.log(file)
    // let fileStream = Fs.createReadStream(file)
    // let fileStat = Fs.stat(file, function(err, stats) {
    //   if (err) {
    //     return console.log(err)
    //   }
    //   minioClient.putObject('wwwsctest', 'timg.jpg', fileStream, stats.size, function(err, etag) {
    //     return console.log(err, etag) // err should be null
    //   })
    // })
    /* 上传对象jputobject并规定htmleata头 */
    // let file = __dirname+ '/timg.jpg'
    // let metaData = {
    //   'Content-Type': 'text/html',
    //   'Content-Language': 123,
    //   'X-Amz-Meta-Testing': 1234,
    //   'example': 5678
    // }
    // minioClient.fPutObject('wwwsctest', 'timgmeta.jpg', file, metaData, function(err, etag) {
    //   return console.log(err, etag) // err should be null
    // })
    /* 将源对象复制到指定存储桶中的新对象。 */
    // var conds = new Minio.CopyConditions()
    // conds.setMatchETag('bd891862ea3e22c93ed53a098218791d')
    // minioClient.copyObject('mybucket', 'newobject', '/mybucket/srcobject', conds, function(e, data) {
    //   if (e) {
    //     return console.log(e)
    //   }
    //   console.log("Successfully copied the object:")
    //   console.log("etag = " + data.etag + ", lastModified = " + data.lastModified)
    // })
    /* 获取对象的元数据。 */
    // minioClient.statObject('mybucket', 'photo.jpg', function(err, stat) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log(stat)
    // })
    /* 删除对象。 */
    // minioClient.removeObject('mybucket', 'photo.jpg', function(err) {
    //     if (err) {
    //         return console.log('Unable to remove object', err)
    //     }
    //     console.log('Removed the object')
    // })
    /* 删除对象列表中的所有对象。 */
    // var objectsList = []
    // List all object paths in bucket my-bucketname.
    // var objectsStream = s3Client.listObjects('my-bucketname', 'my-prefixname', true)
    // objectsStream.on('data', function(obj) {
    //   objectsList.push(obj.name);
    // })
    // objectsStream.on('error', function(e) {
    //   console.log(e);
    // })
    // objectsStream.on('end', function() {
    //   s3Client.removeObjects('my-bucketname',objectsList, function(e) {
    //     if (e) {
    //         return console.log('Unable to remove Objects ',e)
    //     }
    //     console.log('Removed the objects successfully')
    //   })
    // })
    /* 删除部分上载的对象 */
    // minioClient.removeIncompleteUpload('mybucket', 'photo.jpg', function(err) {
    //     if (err) {
    //         return console.log('Unable to remove incomplete object', err)
    //     }
    //     console.log('Incomplete object removed successfully.')
    // })
    /* 为提供的 HTTP 方法"httpMethod"生成预签名 URL */
    // minioClient.presignedUrl('GET', 'mybucket', 'hello.txt', 7 * 24 * 60 * 60, function(err, presignedUrl) {
    //     if (err) return console.log(err)
    //     console.log(presignedUrl)
    // })
    /* 为 HTTP GET 操作生成预签名 URL。浏览器/移动客户端可以指向此 URL 直接下载对象，即使存储桶是私有的 */
    // minioClient.presignedGetObject('mybucket', 'hello.txt', 24 * 60 * 60, function(err, presignedUrl) {
    //     if (err) return console.log(err)
    //     console.log(presignedUrl)
    // })
    /* 为 HTTP PUT 操作生成预签名 URL。 */
    // minioClient.presignedPutObject('mybucket', 'hello.txt', 24 * 60 * 60, function(err, presignedUrl) {
    //     if (err) return console.log(err)
    //     console.log(presignedUrl)
    // })
    /* 允许将策略条件设置为 POST 操作的预签名 URL */
    // var policy = minioClient.newPostPolicy()
    // // Policy restricted only for bucket 'mybucket'.
    // policy.setBucket('mybucket')
    // // Policy restricted only for hello.txt object.
    // policy.setKey('hello.txt')
    /* 允许将策略条件设置为 POST 操作的预签名 URL2 */
    // var policy = minioClient.newPostPolicy()
    // // Policy restricted for incoming objects with keyPrefix.
    // policy.setKeyStartsWith('keyPrefix')
    // var expires = new Date()
    // expires.setSeconds(24 * 60 * 60 * 10)
    // // Policy expires in 10 days.
    // policy.setExpires(expires)
    // // Only allow 'text'.
    // policy.setContentType('text/plain')
    // // Only allow content size in range 1KB to 1MB.
    // policy.setContentLengthRange(1024, 1024 * 1024)
    /* 从浏览器中发布您的内容， 使用 ：superagent */
    // minioClient.presignedPostPolicy(policy, function(err, data) {
    //     if (err) return console.log(err)

    //     var req = superagent.post(data.postURL)
    //     _.each(data.formData, function(value, key) {
    //         req.field(key, value)
    //     })

    //     // file contents.
    //     req.attach('file', '/path/to/hello.txt', 'hello.txt')

    //     req.end(function(err, res) {
    //         if (err) {
    //             return console.log(err.toString())
    //         }
    //         console.log('Upload successful.')
    //     })
    // })
    /* 通知类 */
