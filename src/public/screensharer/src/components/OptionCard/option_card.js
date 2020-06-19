import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
//Styles
import "./option_card.css";

export default class OptionCard extends Component {
  render() {
    return (

      <div className="card" id="cardOption">
        <Card elevation={3}>
          <Card elevation={3} className="icon-card">
            <Avatar variant="square" src={this.props.src} className="icon" />
          </Card>
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <div className="buttonContainer">
            <Link
              to={this.props.route}
              style={{ textDecoration: "none" }}
              className="goButton"
            >
              <Button variant="contained" color="primary">
                Go
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}
