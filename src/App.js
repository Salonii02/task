import React, { Component } from "react";
import Page1 from "./Page1.js";
import Page2 from "./Page2.js";
import Page3 from "./Page3.js";
import Page4 from "./Page4.js";
import Page5 from "./Page5.js";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
      </div>
    );
  }
}
