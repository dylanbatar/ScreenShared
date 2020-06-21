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
    this.canvas = React.createRef();
  }

  componentDidMount() {
    beEmiter({
      access_code: this.props.location.state.access_code,
      email: sessionStorage.getItem("email"),
    });
    this.context = this.canvas.current.getContext("2d");
    this.video.current.addEventListener("loadeddata", (event) => {
      // redibujando el canvas
      setInterval(() => {
        this.context.drawImage(this.video.current, 0, 0, 800, 400);
      }, 100);
      // obtener los pixeles del canvas
      let canvasData = this.context.getImageData(0, 0, 800, 400);
      console.log(canvasData);
      let pixels = canvasData.data;

      // // mandar estos pixeles
      // let cond = false;
      // for (let i = 0; i < pixels.length; i += 4) {
      //   if (cond) pixels.slice(i, i + 3);

      //   cond = !cond;
      // }
      // console.log(pixels);

      const obj = event.target.srcObject.getVideoTracks()[0];
      const blob = new Blob([obj], { type: "image/webp" });
      transmitir({
        email: sessionStorage.getItem("email"),
        media: canvasData,
      });
    });
  }

  render() {
    //Methods

    const startCapture = async () => {
      //transmitir
      navigator.mediaDevices
        .getDisplayMedia({
          video: {
            cursor: "always",
            width: 800,
            height: 400,
          },
          audio: false,
        })
        .then((track) => {
          const screen = this.video.current;

          screen.srcObject = track;
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
          <canvas ref={this.canvas} height={400} width={800}></canvas>
          <br />
          <br />
        </center>
      </Card>
    );
  }
}

export default Share;
