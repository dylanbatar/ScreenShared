import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from "@material-ui/icons/Person";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import { Link } from "react-router-dom";

import "./navbar.css";

class NavBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Button color="inherit" startIcon={<ScreenShareIcon />}>
            <h3>ScreenShare</h3>
          </Button>
         <div>
         <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button className="link" startIcon={<PersonIcon />}>
              Log In
            </Button>
          </Link>
         </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
