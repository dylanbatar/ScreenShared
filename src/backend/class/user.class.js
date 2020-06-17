const Screen = require("./screen.class");

class User extends Screen {
  constructor() {
    this.userList = [];
  }

  addUser(id, username) {
    this.userList.push({ id, user: username, share: false });
  }

  share(id) {}

  stopShare(id) {}

  getUser(id) {}

  deleteUser(id) {}
}
