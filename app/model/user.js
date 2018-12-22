'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE
    } = app.Sequelize;

    const User = app.model.define('user_demo', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: STRING(30),
        age: INTEGER,
        created_at: DATE,
        updated_at: DATE,
    }, {
        freezeTableName: true, 
        timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
    // sequelizeInstance.sync({force: false});
    return User;
};