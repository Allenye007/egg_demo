'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async login(P) {
    const ctx = this.ctx;
    const admin = await ctx.model.Admin.findOne(P);
    let token = await ctx.service.token.bgUser_sign(P);
    if (admin) {
      if (P.pwd === admin.dataValues.pwd) {
        ctx.body = {
          // 返回token
          token,
          code: 5000,
          msg: 'ok',
        };
      } else {
        ctx.body = {
          code: 5001,
          msg: '密码错误',
        };
      }
    } else {
      ctx.body = {
        code: 5002,
        msg: '登陆失败',
      };
    }
  }
  async create(P) {
    const ctx = this.ctx;
    const admin = await ctx.model.Admin.create(P);
    if (admin) {
      ctx.body = {
        code: 5000,
        msg: 'ok',
        data: admin,
      };
    } else {
      ctx.body = {
        code: 5001,
        msg: 'no',
      };
    }
  }
}

module.exports = AdminService;
