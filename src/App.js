import React, { Component } from "react";
import "./app.less";
// import BJImage from "./images/login_bg_img.jpg";webpack alias
import BJImage from "_images/login_bg_img.jpg";

class App extends Component {
  componentDidMount() {
    let element = document.getElementById("box2");
    let myImage = new Image();
    myImage.src = BJImage;
    element.appendChild(myImage);
  }
  render() {
    return (
      <>
        <div className="box">
          <div className="box1">my-project!!!----1</div>
          <div id="box2"></div>
        </div>
      </>
    );
  }
}

export default App;
