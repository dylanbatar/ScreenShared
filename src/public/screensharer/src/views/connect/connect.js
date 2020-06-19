import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./connect.css";

export default class Connect extends Component {
  constructor() {
    super();
    this.state = {
      access_code: "",
    };
  }

  render() {
    const handleCode = (e) => {
      this.setState({ access_code: e.target.value });
    };

    return (
      <div id="connect" className="container">
        <Card className="card" elevation={3}>
          <CardMedia
            className="poster"
            component="img"
            alt="Devices"
            height="300"
            image={process.env.PUBLIC_URL + "/img/devices.svg"}
            title="Devices"
          />
          <CardContent>
            <h3>Type your access code </h3>
            <form noValidate autoComplete="off">
              <TextField
                className="input-code"
                label="your code"
                onChange={handleCode}
              />
            </form>
            <p className="decription">
              For watch a device you need to type the access code of device that
              it's streaming.
            </p>
          </CardContent>
          <CardActions className="buttons">
            <Link
              to={{
                pathname: "/connect/stream",
                state: {access_code: this.state.access_code},
              }}
              style={{ textDecoration: "none" }}
            >
              <Button size="large" color="primary">
                Join
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}
