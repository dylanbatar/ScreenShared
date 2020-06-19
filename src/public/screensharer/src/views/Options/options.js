import React, { Component } from "react";
import OptionCard from "../../components/OptionCard/option_card";
//Styles
import "./options.css";

export default class Options extends Component {
  render() {
    //Get Access Code
    const getAccessCode = () => {
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = characters
        .split("")
        .map((item) =>
          characters.charAt(Math.floor(Math.random() * characters.length))
        )
        .splice(0, 20)
        .join("");

      return result;
    };

    return (
      <center>
        <div className="cardContainer">
          <OptionCard
            title="Share your screen"
            description="You can share your screen with an access code."
            src={process.env.PUBLIC_URL + "/img/screen.svg"}
            route={{
              pathname: "/screen",
              state: { access_code: getAccessCode() },
            }}
          />
          <OptionCard
            title="Connect to a screen"
            description="You can connect to another screen with an access code."
            src={process.env.PUBLIC_URL + "/img/share.svg"}
            route="/connect"
          />
        </div>
      </center>
    );
  }
}
