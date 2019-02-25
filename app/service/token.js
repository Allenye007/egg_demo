'use strict';

const Service = require('egg').Service;
const jwt = require('jsonwebtoken');

class TokenService extends Service {
  async bgUser_sign(P) {
    return new Promise((resolve, reject) => {
      const ctx = this.ctx;
      const payload = {
        name: String(P.name),
        pwd: String(P.pwd),
      };
      // 获取 jwt的secret
      const secret = ctx.app.config.verifyToken.bSecret;
    // let token = jwt.sign({ foo: 'bar' }, '密码', '时间');      
      jwt.sign(payload, secret, {
        expiresIn: 60 * 60 * 24,
      }, (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      });

    })
  }

  async weAppUser_sign() {

  }
}

module.exports = TokenService;
