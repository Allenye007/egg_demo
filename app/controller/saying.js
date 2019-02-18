'use strict';

const Controller = require('egg').Controller;

class SayingController extends Controller {
  // 新建
  async saying_create() {
    const ctx = this.ctx;
    const P = ctx.request.body;
    P.saying_id = new Date().getTime();
    await ctx.service.saying.saying_create(P);
  }
  // 修改
  async saying_update() {
    const ctx = this.ctx;
    const P = ctx.request.body;
    const res = await ctx.service.saying.saying_update(P);
    if (res) {
      if (res === 'ok') {
        ctx.body = {
          code: 5000,
          msg: 'ok',
        };
      } else {
        ctx.body = {
          code: 5002,
          msg: '重复修改',
        };
      }
    } else {
      ctx.body = {
        code: 5001,
        msg: '修改失败',
      };
    }
  }
  // 获取列表
  async saying_get_list() {
    const ctx = this.ctx;
    const res = await ctx.service.saying.saying_get_list();
    if (res) {
      ctx.body = {
        code: 5000,
        msg: 'ok',
        data: res,
      };
    } else {
      ctx.body = {
        code: 5001,
        msg: 'no',
      };
    }
  }
}

module.exports = SayingController;
