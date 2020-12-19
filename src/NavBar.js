import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navlist">
        <Link to="/">logo</Link>
        <div className="navlist-right">
          <Link to="/">About</Link>
          <Link to="/">Services</Link>
          <Link to="/">Case Studies</Link>
          <Link to="/">Testmonials</Link>
          <Link to="/">Contact</Link>
          <button className="loginbutton"> Login</button>
        </div>
      </div>
    );
  }
}
