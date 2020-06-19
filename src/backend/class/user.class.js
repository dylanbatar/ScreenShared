const Screen = require("./screen.class");

class User {
  constructor() {
    this.userList = [];
  }

  addUser(id, username, access_code) {
    let exist = this.userList.find((user)=> user.access_code == access_code)
    if(exist){
      return;
    }
    this.userList.push({ id, user: username, access_code });
  }

  getAllUser() {
    return this.userList;
  }

  getUser(id) {
    return this.userList.filter((user) => user.id == id)[0];
  }

  deleteUser(id) {
    let disconnectedUser = this.getUser(id);
    this.userList = this.userList.filter((item) => item.id != id);
    return disconnectedUser;
  }

  checkAccessCode(access_code) {
    this.userList.filter((user) => {
      console.log(user);
      if (user.access_code == access_code) {
        console.log(user + "es mi access_Code");
      }
    });
    return this.userList.filter((user) => user.access_code == access_code);
  }
}

module.exports = User;
