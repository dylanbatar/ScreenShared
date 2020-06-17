import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import BlockIcon from "@material-ui/icons/Block";
import "./share.css";

class Share extends Component {
  constructor() {
    super();
    this.video = React.createRef();
  }
  render() {
    //Methods
    const startCapture = async () => {
      const screen = this.video.current;
      screen.srcObject = await navigator.mediaDevices
        .getDisplayMedia({
          video: {
            cursor: "always",
            width: 800,
            height: 400,
          },
          audio: false,
        })
        .catch((err) => {
          console.error("Error:" + err);
          return null;
        });
    };

    const stopCapture = async () => {
      const screen = this.video.current;
      let tracks = screen.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      screen.srcObject = null;
    };
    return (
      <Card className="container">
        <center>
          <Card id="screen">
            <video ref={this.video} autoPlay></video>
          </Card>

          <Button
            className="button"
            color="primary"
            onClick={startCapture}
            variant="contained"
          >
            <span>Share</span>
            <ShareIcon fontSize="small" />
          </Button>

          <Button
            className="button"
            color="secondary"
            onClick={stopCapture}
            variant="contained"
          >
            <span>Stop</span>
            <BlockIcon fontSize="small" />
          </Button>
          <br />
          <br />
        </center>
      </Card>
    );
  }
}

export default Share;
