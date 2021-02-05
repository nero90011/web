# axios

    Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

## 执行 GET 请求

    // 为给定 ID 的 user 创建请求
    axios.get('/user?ID=12345')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

    // 上面的请求也可以这样做
    axios.get('/user', {
        params: {
        ID: 12345
        }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

## 执行 POST 请求

    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

## 执行多个并发请求

    function getUserAccount() {
    return axios.get('/user/12345');
    }

    function getUserPermissions() {
    return axios.get('/user/12345/permissions');
    }

    axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
        // 两个请求现在都执行完成
    }));

## 配置

    可以通过向 axios 传递相关配置来创建请求

    axios(config)
    // 发送 POST 请求
    axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
    });
    // 获取远端图片
    axios({
    method:'get',
    url:'http://bit.ly/2mTM3nY',
    responseType:'stream'
    })
    .then(function(response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
    axios(url[, config])
    // 发送 GET 请求（默认的方法）
    axios('/user/12345');