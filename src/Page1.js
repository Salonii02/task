import React, { Component } from "react";
import NavBar from "./NavBar.js";
import rectangle from "./images/page1/Path 37452.png";
import union1 from "./images/page1/Union 1.png";
import leftbox from "./images/page1/Web Design Web Development by SB.png";
import image from "./images/page1/Our products are fully custom-made, built with the latest technologies and cloud-architectures..png";
import arrow from "./images/page1/arrow-down-sign-to-navigate.png";
import "./Page1.css";
export default class Page1 extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <img className="image1" src={rectangle} alt="" />
        <img className="image2" src={union1} alt="" />
        <img className="image3" src={leftbox} alt="" />
        <img className="image4" src={image} alt="" />
        <button className="roundbutton">Get Started</button>
        <img className="arrow" src={arrow} alt="" />
      </div>
    );
  }
}
