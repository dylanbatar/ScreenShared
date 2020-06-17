import React, { Component } from "react";
import { emitDataUser } from "../../services/socket.service";
import Button from "@material-ui/core/Button";

export default class ShareForm extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      email: "",
      pass: "",
    };
  }

  render() {
    emitDataUser("usernamee");

    //Handlers
    const userHandler = (e) => this.setState({ user: e.target.value });
    const emailHandler = (e) => this.setState({ email: e.target.value });
    const passHandler = (e) => this.setState({ pass: e.target.value });
    const loginHandler = () => {
      const { user, email, pass } = this.state;
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, email, password: pass }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      // emitDataUser({ user, email, pass });
    };
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="User"
            value={this.state.user}
            onChange={userHandler}
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={emailHandler}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.pass}
            onChange={passHandler}
          />
          <br />
          <br />
          <Button variant="contained" onClick={loginHandler}>
            Login
          </Button>
          <br />
        </form>
      </>
    );
  }
}
