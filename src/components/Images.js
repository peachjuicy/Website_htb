import React, { Component } from "react";
import { Col, Row } from "react-materialize";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
class Images extends Component {
  render() {
    return (
      <div>
        <Row>
          <ScrollAnimation animateIn="fadeInRight" >
            <Col s={12} xl={3}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src="./photos/13.png"
                alt=""
              />
            </Col>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay="100">
            {" "}
            <Col s={12} xl={3}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src="./photos/13.png"
                alt=""
              />
            </Col>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay="150">
            <Col s={12} xl={3}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src="./photos/13.png"
                alt=""
              />
            </Col>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay="200">
            <Col s={12} xl={3}>
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src="./photos/13.png"
                alt=""
              />
            </Col>
          </ScrollAnimation>
        </Row>
      </div>
    );
  }
}

export default Images;
