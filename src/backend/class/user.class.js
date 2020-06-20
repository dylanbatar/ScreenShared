const Screen = require("./screen.class");

class User {
  constructor() {
    this.userList = [];
  }

  addUser(id, username, access_code) {
    let exist = this.userList.filter((user)=> user.access_code == access_code)
    if(exist.length === 0){
      this.userList.push({ id, user: username, access_code });
    }
    return;
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

  joinByEmail(email){
    return this.userList.filter((user) => user.user == email)[0]; 
  }

  checkAccessCode(access_code) {
    return this.userList.filter((user) => user.access_code == access_code)[0];
  }
}

module.exports = User;
