'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545485910485_5027';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'demo',
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

