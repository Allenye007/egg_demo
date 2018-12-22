'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('admin_demo', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      uid: { // 唯一标识
        type: STRING,
        primaryKey: true,
      },
      vip: {
        type: INTEGER,
        defaultValue: 0,
      },
      user_name: {
        type: STRING,
      },
      user_pwd: {
        type: STRING,
        defaultValue: '123', // 默认值
      },
      phone: {
        type: STRING,
        defaultValue: '1583000', // 默认值
      },
      address: {
        type: STRING,
        defaultValue: '1583000', // 默认值
      },
      sale_volume: {
        type: INTEGER,
        defaultValue: 0,
      },
    });
  },

  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('admin_demo');
  },
};

