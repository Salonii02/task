import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navlist">
        <a href="#">logo</a>
        <div className="navlist-right">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Case Studies</a>
          <a href="#">Testmonials</a>
          <a href="#">Contact</a>
          <button className="loginbutton"> Login</button>
        </div>
      </div>
    );
  }
}
