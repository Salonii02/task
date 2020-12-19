import React, { Component } from "react";
import leftbox from "./images/page2/Group 35699.png";
import rightbox from "./images/page2/Group 35698.png";
import arrowbutton from "./images/page2/Group 35624.png";
import last from "./images/page2/Group 35650.png";
import icon from "./images/page2/Group 35621.png";
import check from "./images/page2/Group 35604.png";
import "./Page2.css";
export default class Page2 extends Component {
  render() {
    return (
      <div>
        <img className="leftbox" src={leftbox} alt="" />
        <img className="rightbox" src={rightbox} alt="" />
        <img className="rightarrowclass" src={arrowbutton} alt="" />
        <div className="about">ABOUTUS</div>
        <div className="blackabout">Great Digital Agency</div>
        <div className="blackdownabout">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </div>
        <div className="abouttempfont">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <button className="getbutton">Get Started</button>
        <img className="last" src={last} alt="" />
        <div className="blue-rectangle"></div>
        <div className="services">Our Services</div>
        <img className="leftarrowclass" src={arrowbutton} alt="" />
        <div className="blackservices">
          Transforming your ideas into reality
        </div>
        <div className="webdev">Web Developement</div>
        <div className="mobdev">Mobile Developement</div>
        <div className="uiux">UI/UX Designing</div>
        <div className="brand">Branding</div>
        <div className="cloud">Cloud Technology</div>
        <div className="white-rectangle"></div>
        <img className="icon" src={icon} alt="" />
        <div className="blackicon">UI/UX Designing</div>
        <div className="icontempfont">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <img className="check1" src={check} alt="" />
        <img className="check2" src={check} alt="" />
        <img className="check3" src={check} alt="" />
        <img className="check4" src={check} alt="" />
      </div>
    );
  }
}
