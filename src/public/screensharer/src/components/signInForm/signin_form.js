import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
//Styles
import Swal from "sweetalert2";
import "./signin_form.css";

export default class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      email: "",
      pass: "",
      redirect: null,
    };
  }

  render() {
    //Handlers
    const userHandler = (e) => this.setState({ user: e.target.value });
    const emailHandler = (e) => this.setState({ email: e.target.value });
    const passHandler = (e) => this.setState({ pass: e.target.value });
    const signinHandler = () => {
      const { user, email, pass } = this.state;
      fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, email, password: pass }),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: "User Created!",
            icon: "success",
            confirmButtonText: "Continue",
          });
          this.setState({ redirect: "screen" });
        })
        .catch((err) => console.log(err));
      // emitDataUser({ user, email, pass });
    };

    if (this.state.redirect)
      return <Redirect from="" to={"/" + this.state.redirect} />;

    return (
      <center>
        <Card className="form">
          <br />
          <form>
            <TextField
              label="User"
              value={this.state.user}
              onChange={userHandler}
              type="text"
              fullWidth
            />
            <br />
            <br />
            <TextField
              label="Email"
              value={this.state.email}
              onChange={emailHandler}
              type="email"
              fullWidth
            />
            <br />
            <br />
            <TextField
              label="Password"
              value={this.state.pass}
              onChange={passHandler}
              type="password"
              fullWidth
            />
            <br />
            <br />
            <br />
            <Button variant="contained" onClick={signinHandler} color="primary">
              Sign In
            </Button>
            <br />
          </form>
          <br />
        </Card>
      </center>
    );
  }
}
