import React, { Component } from "react";
import { emitDataUser } from "../../services/socket.service";

export default class ShareForm extends Component {
  render() {
    emitDataUser('usernamee');
    return (
      <>
        <form>
          <input type="text" placeholder="Name" />
        </form>
      </>
    );
  }
}
