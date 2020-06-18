import React, { Component } from "react";
import Card from "@material-ui/core/Card";
//Styles
import "./stream.css";
export default class Stream extends Component {
  constructor() {
    super();
    this.video = React.createRef();
  }

  render() {
    const getScreen = async () => {
      const screen = this.video.current;
      //screen.srcObject = null;
    };

    getScreen();

    return (
      <div id="stream">
        <Card id="screen" elevation={3}>
          <video ref={this.video} autoPlay></video>
        </Card>
      </div>
    );
  }
}
