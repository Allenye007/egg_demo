'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const schema = {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, comment: '索引' },
    saying_id: { type: STRING, primaryKey: true, comment: '话术ID' },
    saying_key: { type: STRING, defaultValue: '...', comment: '话术KEY' },
    content: { type: STRING, defaultValue: '...', comment: '内容' },
  };
  const define = {
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    engine: 'InnoDB',
    underscored: true,
    comment: '话术（一句话）',
  };
  const Saying = app.model.define('saying', schema, define);
  app.model.sync({ force: false });
  return Saying;
};
