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
            media = new Uint8Array(media);
            const blob = new Blob([media]);
            console.log(blob);
            const screen = this.video.current;
            console.log(URL.createObjectURL(blob));
            //screen.src = URL.createObjectURL(blob);
            // const data = await new Response(media);
            // console.log(data.blob());
            // await data.blob().then((result) => {
            //   let clone = result.clone();
            //   console.log(clone);
            // });
          }
        }
      });
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
