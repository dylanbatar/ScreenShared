import React, { Component } from "react";
import Share from "./components/shareScreen/share";
import LogInForm from "./components/loginForm/login_form";
import SignInForm from "./components/signInForm/signin_form";
import Options from "./views/Options/options";
import NavBar from "./components/navbar/navbar";
import Connect from "./views/connect/connect.js";
import Stream from "./views/connect/stream.js";

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
            <Route path="/connect" exact render={() => <Connect />} />
            <Route
              path="/connect/stream"
              exact
              render={(props) => <Stream {...props} />}
            />
            <Route path="/screen" render={(props) => <Share {...props} />} />
            <Route path="/options" render={(props) => <Options {...props} />} />
          </Switch>
          <Redirect from="" to="/login" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
