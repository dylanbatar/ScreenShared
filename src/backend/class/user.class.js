const Screen = require("./screen.class");

class User {
  constructor() {
    this.userList = [];
  }

  addUser(id, username, access_code) {
    this.userList.push({ id, user: username, share: false, access_code });
  }

  getAllUser() {
    return this.userList;
  }

  getUser(id) {
    return this.userList.filter((user) => user.id == id)[0];
  }

  deleteUser(id) {}
}

module.exports = User;
