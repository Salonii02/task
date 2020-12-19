import React, { Component } from "react";
import styled from "styled-components";
import triangle from "./images/page4/Group 35700.png";
import react from "./images/page4/React-icon.png";
import aws from "./images/page4/Amazon_Web_Services_Logo-1.png";
import redux from "./images/page4/redux-logo.png";
import cloud from "./images/page4/Mask Group 1.png";
import node from "./images/page4/Mask Group 3.png";
import js from "./images/page4/Path 37519.png";
import sf from "./images/page4/g10.png";
const Triangle = styled.img`
  position: absolute;
  top: 4654px;
  left: -137.46983337402344px;
  width: 720px;
  height: 564px;
  opacity: 1;
`;
const Titlecontent = styled.div`
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
  color: #292929;
  opacity: 1;
`;

const Whiteshadow = styled.div`
  position: absolute;
  top: 5298px;
  left: 613px;
  width: 694px;
  height: 81px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 40px 60px #0e77ff26;
  border-radius: 72px;
  opacity: 1;
  text-align: center;
  font-size: 36px;
  font: normal normal normal 20px/50px Poppins;
  color: blue;
`;
const Image = styled.img`
  position: absolute;
  top: ${props => `${parseInt(props.top)}px`};
  left: ${props => `${parseInt(props.left)}px`};
  width: 140px;
  height: 140px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0e77ff;
  border-radius: 9px;
  opacity: 1;
`;
export default class Page4 extends Component {
  render() {
    return (
      <div>
        <Triangle src={triangle} />
        <Titlecontent
          top="5072"
          left="771"
          width="378"
          height="56"
          s1="600"
          s2="40"
          s3="50"
        >
          Core Technologies
        </Titlecontent>

        <Titlecontent
          top="5168"
          left="520"
          width="881"
          height="94"
          s1="300"
          s2="18"
          s3="32"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Titlecontent>
        <Whiteshadow> Development</Whiteshadow>
        <Titlecontent
          top="5322"
          left="687"
          width="68"
          height="28"
          s1=""
          s2="20"
          s3="50"
        >
          Design
        </Titlecontent>
        <Titlecontent
          top="5322"
          left="1135"
          width="99"
          height="28"
          s1=""
          s2="20"
          s3="50"
        >
          Marketing
        </Titlecontent>
        <Image src={react} top="5515" left="321" />
        <Image src={aws} top="5515" left="505" />
        <Image src={cloud} top="5515" left="701" />
        <Image src={redux} top="5515" left="891" />
        <Image src={js} top="5515" left="1080" />
        <Image src={sf} top="5515" left="1270" />
        <Image src={aws} top="5515" left="1460" />

        <Image src={sf} top="5706" left="417" />
        <Image src={aws} top="5706" left="607" />
        <Image src={cloud} top="5706" left="797" />
        <Image src={node} top="5706" left="987" />
        <Image src={js} top="5706" left="1176" />
      </div>
    );
  }
}
