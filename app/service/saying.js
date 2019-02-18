'use strict';

const Service = require('egg').Service;

class SayingService extends Service {
  async saying_create(P) {
    const ctx = this.ctx;
    const findData = await ctx.model.Saying.findOne({
      where: {
        content: P.content,
      },
    });
    if (findData) {
      ctx.body = {
        code: 5001,
        msg: '已经存在了',
      };
    } else {
      const createData = await ctx.model.Saying.create(P);
      if (createData) {
        ctx.body = {
          code: 5000,
          msg: 'OK',
          data: createData,
        };
      } else {
        ctx.body = {
          code: 5002,
          msg: '创建失败',
        };
      }
    }
  }

  async saying_update(P) {
    const ctx = this.ctx;
    const findData = await ctx.model.Saying.findOne({
      where: {
        content: P.content,
      },
    });
    // 没有相同的content,在修改，否则不修改
    // console.log(findData, 111111111111);
    if (!findData) {
      const updataData = await ctx.model.Saying.update({
        content: P.content,
        saying_key: P.saying_key,
      }, {
        where: {
          id: P.id,
        },
      });
      if (updataData) {
        return 'ok';
      }
    } else {
      return 'no';
    }
  }

  async saying_get_list() {
    const ctx = this.ctx;
    const data = await ctx.model.Saying.findAndCountAll();
    if (data) {
      return data;
    }
  }
}

module.exports = SayingService;
