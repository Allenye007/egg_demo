'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Admin = app.model.define('admin_demo', {
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
  }, {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  app.model.sync({ force: false });

  return Admin;
};
