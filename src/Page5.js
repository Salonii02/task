import React, { Component } from "react";
import styled from "styled-components";
import girl from "./images/page5/Ellipse 216.png";
import dots1 from "./images/page5/Group 35648.png";
import dots2 from "./images/page5/Group 35649@2x.png";
import arrow from "./images/page5/Group 35626@2x.png";
import doublearrow from "./images/page5/Group 35601.png";
import reacticon from "./images/page5/react-icon.png";
const Rectangle = styled.div`
  position: absolute;
  top: 6068px;
  left: 0px;
  width: 939px;
  height: 917px;
  background: #0e77ff 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const Girl = styled.img`
  position: absolute;
  top: 6290px;
  left: 214px;
  width: 468px;
  height: 468px;
  padding-box;
  opacity: 1;
`;
const Dots1 = styled.img`
  position: absolute;
  top: 5885px;
  left: 729px;
  width: 275px;
  height: 473px;
  transform: matrix(0, 1, -1, 0, 0, 0);
  opacity: 1;
`;

const Dots2 = styled.img`
  position: absolute;
  top: 6693px;
  left: 1634px;
  width: 572px;
  height: 572px;
  opacity: 1;
`;
const Arrow = styled.img`
  position: absolute;
  top: ${props => `${parseInt(props.top)}px`};
  left: 1018px;
  width: ${props => `${parseInt(props.width)}px`};
  height: ${props => `${parseInt(props.height)}px`};
  opacity: 1;
`;
const Titlecontent = styled.div`
  position: absolute;
  top: ${props => `${parseInt(props.top)}px`};
  left: 1020px;
  width: ${props => `${parseInt(props.width)}px`};
  height: ${props => `${parseInt(props.height)}px`};
  text-align: left;
  font: ${props =>
    `normal normal ${parseInt(props.s1)} ${parseInt(props.s2)}px/${parseInt(
      props.s3
    )}px Poppins`};
  letter-spacing: 0px;
  color: #292929;
  opacity: 1;
`;

const Title = styled.div`
  position: absolute;
  top: 6255px;
  left: 1065px;
  width: 277px;
  height: 35px;
  text-align: left;
  font: normal normal 600 25px/50px Poppins;
  letter-spacing: 0px;
  color: #0e77ff;
  opacity: 1;
`;
export default class Page5 extends Component {
  render() {
    return (
      <div>
        <Rectangle />
        <Girl src={girl} />
        <Dots1 src={dots1} />
        <Dots2 src={dots2} />
        <Arrow src={arrow} top="6249" width="38" height="47" />
        <Arrow src={doublearrow} top="6798" width="162" height="57" />
        <Arrow src={reacticon} top="6669" width="81" height="72" />
        <Title>SELECTEDCUSTOMERS</Title>
        <Titlecontent
          top="6308"
          width="398"
          height="101"
          s1="600"
          s2="36"
          s3="50"
        >
          Check what our clients says about us
        </Titlecontent>
        <Titlecontent
          top="6471"
          width="621"
          height="148"
          s1="300"
          s2="18"
          s3="40"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Titlecontent>
      </div>
    );
  }
}
