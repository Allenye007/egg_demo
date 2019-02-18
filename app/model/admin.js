'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Admin = app.model.define('admin', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, comment: '索引' },
    uid: { type: STRING, primaryKey: true, comment: '用户ID' },
    vip: { type: STRING, defaultValue: 0, comment: '0普通用户，1普通会员，2超级会员' },
    name: { type: STRING, defaultValue: '', comment: '用户名' },
    pwd: { type: STRING, defaultValue: '123', comment: '密码' },
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
