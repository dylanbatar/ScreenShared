import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import BlockIcon from "@material-ui/icons/Block";
import TextField from "@material-ui/core/TextField";
//Styles
import "./share.css";
import { transmitir, beEmiter } from "../../services/socket.service";

class Share extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  componentDidMount() {
    beEmiter({
      access_code: this.props.location.state.access_code,
      email: sessionStorage.getItem("email"),
    });
    this.video.current.addEventListener("loadeddata", (event) => {
      // console.log(event.target.srcObject.getVideoTracks());
      // const blobEvent = new BlobEvent({data: aSpecificBlob}[, timecode]);
      const obj = event.target.srcObject;//.getVideoTracks();
      const blob = new Blob([obj]);
      console.log(blob);
      transmitir({
        email: sessionStorage.getItem("email"),
        media: blob,
      });
    });
  }

  render() {
    //Methods

    const startCapture = async () => {
      const screen = this.video.current;
      //transmitir
      const media = await navigator.mediaDevices

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
      screen.srcObject = media;
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
            <video
              ref={this.video}
              autoPlay
              // onLoadedData={({ target }) => {
              //   console.log(target.srcObject);
              //   transmit(target.srcObject);
              // }}
            ></video>
          </Card>
          <TextField
            className="accessCode"
            label="Access Code"
            placeholder="Access Code"
            disabled
            value={this.props.location.state.access_code}
          />
          <Button
            className="button"
            color="primary"
            onClick={startCapture}
            variant="contained"
            startIcon={<ShareIcon fontSize="small" />}
          >
            Share
          </Button>

          <Button
            className="button"
            color="secondary"
            onClick={stopCapture}
            variant="contained"
            startIcon={<BlockIcon fontSize="small" />}
          >
            Stop
          </Button>
          <br />
          <br />
        </center>
      </Card>
    );
  }
}

export default Share;
