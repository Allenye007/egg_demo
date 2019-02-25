'use strict';

const Controller = require('egg').Controller;

class ChatController extends Controller {
  async chat_create() {
    const ctx = this.ctx;
    const P = ctx.request.body;
    P.chat_id = new Date().getTime();
    await ctx.service.chat.chat_create(P);
  }

  // 获取关键字所对应的话题
  async get_chat_list() {
    const ctx = this.ctx;
    const P = ctx.request.body;
    await ctx.service.chat.get_chat_list(P);
  }

  // 获取所有关键字话题
  async get_all_chat_list() {
    const ctx = this.ctx;
    // console.log(ctx, 12121212);    
    // console.log(ctx.bgUser, 123123123);
    if (!ctx.bgUser) {
      ctx.body = {
        code: '5010',
        msg: '没有权限',
      };
      return 0;
    }
    await ctx.service.chat.get_all_chat_list();
  }
}

module.exports = ChatController;
