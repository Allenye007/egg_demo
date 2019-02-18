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
    await ctx.service.chat.get_all_chat_list();
  }
}

module.exports = ChatController;
