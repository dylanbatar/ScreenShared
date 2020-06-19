import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { beReceptor } from "../../services/socket.service";

//Styles
import "./stream.css";
export default class Stream extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
  }

  componentDidMount() { 
    beReceptor(this.props.location.state.access_code)
    console.log('ok');
  }

  render() {
    const getScreen = async () => {
      // const screen = this.video.current;
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
