'use strict';

const Controller = require('egg').Controller;
const shortid = require('shortid');
class AdminController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async create() {
    const ctx = this.ctx;
    const { user_name, user_pwd } = ctx.request.body;
    const uid = shortid.generate();
    const admin = await ctx.model.Admin.create({ user_name, user_pwd, uid });
    ctx.status = 200;
    ctx.body = admin;
  }
}

module.exports = AdminController;
