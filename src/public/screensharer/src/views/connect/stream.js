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

  componentDidMount() {}

  render() {
    const getScreen = async () => {
      await this.other.on("transmitir", async (stream) => {
        if (stream) {
          console.log(stream);
          let media = stream?.media;

          if (media) {
            //🚀
            this.context = this.video.current.getContext("2d");

            console.log(media);

            // let arrayBufferView = new Uint8Array(media);
            // let blob = new Blob([arrayBufferView], { type: "image/webp" });
            // let urlCreator = window.URL || window.webkitURL;
            // let imageUrl = urlCreator.createObjectURL(blob);

            // create custom array view and fill with some random data

            // create ImageData instance
            // var array = new Uint32Array(media);
            // var iData = new ImageData(
            //   new Uint8ClampedArray(array.buffer),
            //   100,
            //   100
            // );

            // const imgtag = document.querySelector("#img");

            // let imgData = new Blob([
            //   new Uint8Array(media, media.byteOffset, media.byteLength),
            // ]);
            // imgtag.src = imgData;

            // img.onload = () => {
            //   console.log(img);
            //   this.context.drawImage(img, 0, 0, 500, 500);
            // };

            //🚀

            // screen.srcObject = URL.createObjectURL(blob);
            //screen.src = URL.createObjectURL(blob);
          }
        }
      });
    };

    getScreen();

    return (
      <div id="stream">
        <Card id="screen" elevation={3}>
          <canvas id="canvas" ref={this.video}></canvas>
          <img id="img" src="" alt=""></img>
        </Card>
      </div>
    );
  }
}
