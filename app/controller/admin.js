'use strict';

const Controller = require('egg').Controller;
const shortid = require('shortid');
class AdminController extends Controller {
  // 登陆
  async login() {
    const ctx = this.ctx;
    const { name, pwd } = ctx.request.body;
    if (!name) {
      ctx.body = '请输入用户名';
    }
    if (!pwd) {
      ctx.body = '请输入密码';
    }
    const P = ctx.request.body;
    await ctx.service.admin.login(P);
  }
  // 创建用户
  async create() {
    const ctx = this.ctx;
    const { name, pwd, vip } = ctx.request.body;
    if (!name) {
      ctx.body = {
        code: 5011,
        msg: '请输入用户名',
      };
    }
    if (!pwd) {
      ctx.body = {
        code: 5011,
        msg: '请输入密码',
      };
    }
    if (!vip) {
      ctx.body = {
        code: 5011,
        msg: '请输入vip',
      };
    }
    const P = ctx.request.body;
    const uid = shortid.generate();
    P.uid = uid;
    await ctx.service.admin.create(P);
  }
}

module.exports = AdminController;
