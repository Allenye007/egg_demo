'use strict';

// had enabled by egg
// exports.static = true;


// sequelize数据库
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};



exports.security = {
    xframe: {
      enable: false,
    },
};
  