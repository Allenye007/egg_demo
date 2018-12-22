'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.post('/users', controller.users.create);
  router.post('/admin/registe', controller.admin.admin.create);
};
