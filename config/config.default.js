'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545485910485_5027';

  // add your config here
  config.middleware = ['verifyToken'];

  config.verifyToken = {
    bKey: 'a1314', // 后台
    wKey: 'a520', // 微信
    bSecret: 'allen_bg', // 后台验证 secret
    wSecret: 'allen_weApp', // 微信验证 secret
  }

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'egg_db',
    username: 'root',
    password: '123456',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  return config;
};

