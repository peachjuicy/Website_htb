import React, { Component } from "react";
import { Container, Col, Row } from "react-materialize";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
class Icons extends Component {
  render() {
    return (
      <div>
        <Row>
        <ScrollAnimation animateIn="fadeIn">
            <h5>Lorem ipsum</h5>
            <Row>
          <Container
            style={{ background: "#FF0000", opacity: "0.8", height: "2px",marginBottom:"15px" }}
          />
        </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" >
          <Col xl={3} s={12}>
              <i className="fas fa-laptop-code fa-3x" style={{color:"#424242"}}/>
              <p> At vero eos et accusamus</p>
            </Col>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay="100">
          <Col xl={3} s={12}>
              <i className="fas fa-keyboard fa-3x" style={{color:"#424242"}}/>
              <p> At vero eos et accusamus</p>
            </Col>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay="150">
          <Col xl={3} s={12}>
              <i className="fas fa-pencil-ruler fa-3x" style={{color:"#424242"}}/>
              <p> At vero eos et accusamus</p>
            </Col>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay="200">
          <Col xl={3} s={12}>
              <i className="fas fa-dolly fa-3x" style={{color:"#424242"}} />
              <p> At vero eos et accusamus</p>
            </Col>
          </ScrollAnimation>
        </Row>
      </div>
    );
  }
}

export default Icons;
