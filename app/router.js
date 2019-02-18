'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

// app/router.js
module.exports = app => {
  const { router, controller } = app;

  router.post('/admin/login', controller.admin.login); // 登陆
  router.post('/admin/create', controller.admin.create); // 创建用户

  // 对话
  router.post('/chat/create', controller.chat.chat_create); // 创建话题
  router.post('/chat/list', controller.chat.get_chat_list); // 获取传入的关键字列表
  router.post('/chat/allList', controller.chat.get_all_chat_list); // 获取关键字列表

  // 话术
  router.post('/saying/create', controller.saying.saying_create); // 创建话术
  router.post('/saying/update', controller.saying.saying_update); // 修改话术
  router.post('/saying/list', controller.saying.saying_get_list); // 话术列表

};
