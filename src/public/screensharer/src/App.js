import React, { Component } from "react";
import Share from "./components/shareScreen/share";
import ShareForm from "./components/shareForm/share_form";


class App extends Component {

  render() {
    return (
      <>
        <Share />
        <ShareForm />
      </>
    );
  }
}

export default App;
