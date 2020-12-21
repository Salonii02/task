import React, { Component } from "react";
import "./Page3.css";
import styled from "styled-components";

const Card = styled.div`
  position: absolute;
  top: 4182px;
  left: 700px;
  width: 519px;
  height: 394px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 30px 60px #0e77ff26;
  opacity: 1;
`;

const Button = styled.button`
  position: absolute;
  top: ${props => `${parseInt(props.top)}px`};
  left: ${props => `${parseInt(props.left)}px`};
  width: ${props => `${parseInt(props.width)}px`};
  height: ${props => `${parseInt(props.height)}px`};
  opacity: 1;
  background: #0e77ff 0% 0% no-repeat padding-box;
  border-radius: 31px;
  text-align: center;
  font: normal normal 600 20px/50px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
`;

const Content = styled.div`
  position: absolute;
  top: ${props => `${parseInt(props.top)}px`};
  left: ${props => `${parseInt(props.left)}px`};
  width: ${props => `${parseInt(props.width)}px`};
  height: ${props => `${parseInt(props.height)}px`};
  text-align: left;
  font: ${props =>
    `normal normal ${parseInt(props.s1)} ${parseInt(props.s2)}px/${parseInt(
      props.s3
    )}px Poppins`};
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

export default class Page3 extends Component {
  render() {
    return (
      <div>
        <div className="page3-01">Workflow</div>
        <div className="page3-02">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua habitant.
        </div>
        <Card />
        <Button top="4159" left="280" width="121" height="45">
          Step 1
        </Button>
        <Button top="4159" left="771" width="121" height="45">
          Step 2
        </Button>
        <Button top="4159" left="1260" width="121" height="45">
          Step 3
        </Button>
        <Content
          top="4231"
          left="280"
          width="276"
          height="51"
          s1="600"
          s2="36"
          s3="50"
        >
          Send your brief
        </Content>
        <Content
          top="4231"
          left="771"
          width="299"
          height="51"
          s1="600"
          s2="36"
          s3="50"
        >
          Wait for delivery
        </Content>
        <Content
          top="4231"
          left="1260"
          width="251"
          height="51"
          s1="600"
          s2="36"
          s3="50"
        >
          Get your files!
        </Content>

        <Content
          top="4318"
          left="280"
          width="379"
          height="170"
          s1=""
          s2="16"
          s3="25"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua habitant.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua habitant.
        </Content>
        <Content
          top="4318"
          left="771"
          width="379"
          height="170"
          s1=""
          s2="16"
          s3="25"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua habitant.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua habitant.
        </Content>
        <Content
          top="4318"
          left="1280"
          width="379"
          height="170"
          s1=""
          s2="16"
          s3="25"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua habitant.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua habitant.
        </Content>
      </div>
    );
  }
}
