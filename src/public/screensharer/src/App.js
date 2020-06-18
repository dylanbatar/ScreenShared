import React, { Component } from "react";
import Share from "./components/shareScreen/share";
import LogInForm from "./components/loginForm/login_form";
import SignInForm from "./components/signInForm/signin_form";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Switch>
            <Route path="/login" component={LogInForm} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/screen" render={(props) => <Share {...props}/>} />
          </Switch>
          <Redirect from="" to="/login" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
