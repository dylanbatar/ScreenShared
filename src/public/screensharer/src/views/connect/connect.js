import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./connect.css";
import { recibir } from "../../services/socket.service";

export default class Connect extends Component {
  constructor(props) {
    super(props);
  }

  validarCodeAccess = (e) => {
    recibir();
  };

  render() {
    return (
      <div id="connect" className="container">
        <Card className="card" elevation={3}>
          <CardMedia
            className="poster"
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={process.env.PUBLIC_URL + "/img/devices.svg"}
            title="Contemplative Reptile"
          />
          <CardContent>
            <h3>Type your access code </h3>
            <form noValidate autoComplete="off">
              <TextField className="input-code" label="your code" onChange={this.validarCodeAccess}/>
            </form>
            <p className="decription">
              For see a device your need type the access code of device that
              it's streaming
            </p>
          </CardContent>
          <CardActions className="buttons">
            <Link to="/connect/stream" style={{ textDecoration: "none" }}>
              <Button size="small" color="primary">
                Join
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}
