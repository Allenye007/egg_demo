'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
// app/router.js 里面定义 URL 路由规则
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
};





// // app/router.js
// module.exports = app => {
//   const { router, controller } = app;
//   router.get('/home', controller.home);
//   router.get('/user/:id', controller.user.page);
//   router.post('/admin', isAdmin, controller.admin);
//   router.post('/user', isLoginUser, hasAdminPermission, controller.user.create);
//   router.post('/api/v1/comments', controller.v1.comments.create); // app/controller/v1/comments.js
// };
