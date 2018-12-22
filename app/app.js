'use strict';

/**
 * @param {Egg.Application} app - egg application
*/
// 仅用于 生产 || 测试
module.exports = app => {
  if (app.config.env === 'local' || app.config.env === 'unittest') {
    app.beforStart(async () => {
      await app.model.sync({ farce: false });
    });
  }
};
