import React, { Component } from "react";
// import Share from "./components/shareScreen/share";
import ShareForm from "./components/shareForm/share_form";
import NavBar from "./components/navbar/navbar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        {/* <Share /> */}
        <ShareForm />
      </>
    );
  }
}

export default App;
