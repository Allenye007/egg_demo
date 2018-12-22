// const Sequelize = require('sequelize');

exports.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'express_demo',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
    // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
    // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
    // more sequelize options
};