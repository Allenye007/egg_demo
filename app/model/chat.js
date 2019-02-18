'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const schema = {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, comment: '索引' },
    chat_id: { type: STRING, primaryKey: true, comment: '对话ID' },
    chat_key: { type: STRING, defaultValue: '...', comment: '对话KEY' },
    B: { type: STRING, defaultValue: '...', comment: 'boy' },
    G: { type: STRING, defaultValue: '...', comment: 'girl' },
  };
  const define = {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
    underscored: true,
    comment: '对话表',
  };
  const Chat = app.model.define('chat', schema, define);
  app.model.sync({ force: false });
  return Chat;
};
