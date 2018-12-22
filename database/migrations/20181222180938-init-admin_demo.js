'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
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
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
