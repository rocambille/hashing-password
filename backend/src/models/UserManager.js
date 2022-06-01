const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  find(id) {
    return this.connection.query(
      `select id, login from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`select id, login from  ${this.table}`);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (login, password) values (?, ?)`,
      [user.login, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set login = ?, password = ? where id = ?`,
      [user.login, user.password, user.id]
    );
  }
}

module.exports = UserManager;
