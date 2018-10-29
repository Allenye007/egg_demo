'use strict';

// had enabled by egg
// exports.static = true;


// sequelize数据库
// exports.sequelize = {
//     enable: true,
//     package: 'egg-sequelize',
// };


// MySQL数据库
exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};

exports.security = {
    xframe: {
      enable: false,
    },
};
  