'use strict';

const Service = require('egg').Service;

class ChatService extends Service {
  async chat_create(P) {
    const ctx = this.ctx;
    // 关键字可以重复
    const findOneData = await ctx.model.Chat.findOne({
      where: {
        B: P.B,
        G: P.G,
      },
    });

    if (findOneData) {
      ctx.body = {
        code: 5001,
        msg: '已存在',
      };
    } else {
      const createData = await ctx.model.Chat.create(P);
      ctx.body = {
        code: 5000,
        msg: '创建成功',
        data: createData,
      };
    }
  }

  async get_chat_list(P) {
    const ctx = this.ctx;
    // 如果传关键字，就是单独关键字查询;
    const list = await ctx.model.Chat.findAndCountAll({
      where: {
        chat_key: P.chat_key,
      },
    });
    if (list) {
      ctx.body = {
        code: 5000,
        msg: 'ok',
        data: list,
      };
    }
  }

  async get_all_chat_list() {
    const ctx = this.ctx;
    // 如果不传，所有查询
    const allList = await ctx.model.Chat.findAndCountAll();
    if (allList) {
      ctx.body = {
        code: 5000,
        msg: 'ok',
        data: allList,
      };
    }
  }
}

module.exports = ChatService;
