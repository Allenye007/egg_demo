#### 定义模板

```

// app/model/user.js

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    login: STRING,
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  User.findByLogin = async (login) => {
    return await this.findOne({
      where: {
        login: login
      }
    });
  }

  User.prototype.logSignin = async () => {
    return await this.update({ last_sign_in_at: new Date() });
  }

  return User;
};



// Now you can use it in your controller:

// app/controller/user.js
module.exports = app => {
  return class UserController extends app.Controller {
    async index() {
      const users = await this.ctx.model.User.findAll();
      this.ctx.body = users;
    }

    async show() {
      const user = await this.ctx.model.User.findByLogin(this.ctx.params.login);
      await user.logSignin();
      this.ctx.body = user;
    }
  }
}
```

#### 采坑

###### 1）

```

```

###### 2）

```
NOTE: options.delegate default to model, so app.model is an Instance of Sequelize, so you can use methods like: app.model.sync, app.model.query ，app.model.sync({ force: false });

https://github.com/eggjs/egg-sequelize

```

###### 3）

```

```

###### 4）

```

```

###### 5）

```

```

###### 6）

```

```

###### 7）

```

```

#### 模块

| name | usage | mark |
| ---- | ----- | ---- |
|      |       |      |
|      |       |      |
|      |       |      |

