import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { beReceptor } from "../../services/socket.service";

//Styles
import "./stream.css";
export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.other = beReceptor(props.location.state.access_code);
  }

  componentDidMount() {
    this.context = this.video.current.getContext("2d");
  }

  render() {
    const getScreen = async () => {
      await this.other.on("transmitir", async (stream) => {
        if (stream) {
          console.log(stream);
          let media = stream?.media;

          if (media) {
            //🚀
            let frame = new Image();
            frame.src = media;
            console.log(frame);
            frame.onload = () => {
              this.context.drawImage(frame, 0, 0, 800, 400);
            }

            //🚀
          }
        }
      });
    };

    getScreen();

    return (
      <div id="stream">
        <Card id="screen" elevation={3}>
          <canvas id="canvas" ref={this.video} height={400} width={800}></canvas>
        </Card>
      </div>
    );
  }
}
