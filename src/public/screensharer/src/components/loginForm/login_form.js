import React, { Component } from "react";
import { emitDataUser } from "../../services/socket.service";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import { Redirect, Link } from "react-router-dom";
//Styles
import Swal from "sweetalert2";
import "./login_form.css";

export default class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      redirect: null,
    };
  }

  render() {
    emitDataUser("usernamee");

    //Handlers
    const emailHandler = (e) => this.setState({ email: e.target.value });
    const passHandler = (e) => this.setState({ pass: e.target.value });
    const loginHandler = () => {
      const { email, pass } = this.state;
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pass }),
      })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            title: "Log In Succesfully!",
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
            <Button variant="contained" onClick={loginHandler} color="primary">
              Log In
            </Button>
            <br />
            <br />
            <Link to="/signin">
              you don't have an account yet? <br />
              Create one now!
            </Link>
            <br />
          </form>
          <br />
        </Card>
      </center>
    );
  }
}
