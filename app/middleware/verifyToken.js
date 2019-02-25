'use strict';
const jwt = require('jsonwebtoken');  // 验证token

module.exports = options => {
  return async function verifyToken(ctx, next) {
    let secret = '';
    // 只解析来自header的token  axios.defaults.headers.common['x-access-s'] = 'allen';  设置一个请求头
    // let token = jwt.sign({ foo: 'bar' }, '密码', '时间');
    const token = ctx.headers['x-access-token'];
    console.log(token, 2323233);
    if (token) {
      // 后台请求参数需要有非空值
      let status = 0;
      if (ctx.headers['x-access-bg'] === options.bKey) {
        status = 1; // 来自后台请求
      }
      if (ctx.headers['x-access-weApp'] === options.wKey) {
        status = 2; // 来自微信
      }
      console.log(ctx.headers);
      switch (status) {
        case 1:
          secret = options.bSecret;
          break;
        case 2:
          secret = options.wSecret;
          break;
      }
      jwt.verify(token, secret, (err, decoded) => {
        if (err === null) {
          switch (status) {
            case 1:
              // 后台用户
              decoded = JSON.parse(decoded.payload);
              ctx.bgUser = {
                name: decoded.name,
                pwd: decoded.pwd,
              };
              console.log(111111)
              break;
            case 2:
              // 微信用户
              decoded = JSON.parse(decoded.payload);                        
              ctx.weAppUser = {
                name: decoded.name,
                pwd: decoded.pwd,
              };
              console.log(2222222)              
              break;
          }
        }
      });
    }

    await next();

  };
};
