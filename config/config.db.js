// exports.sequelize = {
//     dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
//     database: 'express_demo',
//     host: 'localhost',
//     port: '3306',
//     username: 'root',
//     password: '123456',
//     // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
//     // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
//     // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
//     // more sequelize options
// };



// config/config.${env}.js
exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'express_demo',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };