import React, {Component} from 'react';
import './share.css';

class Share extends Component {
    constructor() { 
        super()
        this.video = React.createRef()
    }
    render(){ 

        //Methods
        const startCapture = async () => {
          const screen = this.video.current;
          console.log(screen);
          screen.srcObject = await navigator.mediaDevices
            .getDisplayMedia({
              video: {
                cursor: "always",
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
        return <>
            <video ref={this.video} id="screen" autoPlay>
            </video>
            <button onClick={startCapture}>Share</button>
            <button onClick={stopCapture}>Stop</button>
        </>
   }
 }



export default Share;
