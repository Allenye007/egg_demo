'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const {ctx} = this;
    ctx.body = {
      name: ctx.query.name,
      id: ctx.query.id,
    }
    
  }
}

module.exports = UserController;
