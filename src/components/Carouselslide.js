import React, { Component } from "react";
import {Carousel, Row} from "react-materialize";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
class Carouselslide extends Component {
  render() {
    return (
      <div>
          <Row style={{background:"#757575"}}>
      <Carousel images={[
        <img src="./photos/11.png" alt="sksk" />,
        <img src="./photos/13.png" alt="sksk" />,
        <img src="./photos/16.png" alt="sksk" />,
        <img src="./photos/23.png" alt="sksk" />,
        <img src="./photos/26.png" alt="sksk" />,
        <img src="./photos/18.png" alt="sksk" />,
        <img src="./photos/19.png" alt="sksk" />,
        <img src="./photos/21.png" alt="sksk" />,
        <img src="./photos/24.png" alt="sksk" />
  
  ]}  options={{numVisible:10}}/>
  </Row>
      </div>
    );
  }
}

export default Carouselslide;
