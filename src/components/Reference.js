import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-materialize";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

class Reference extends Component {
  render() {
    return (
      <div>
      <ScrollAnimation animateIn="fadeInUp">
        <Row>
          <h5>References</h5>
          <Row>
          <Container
            style={{ background: "#FF0000", opacity: "0.8", height: "2px" }}
          />
        </Row>
       
          <Col s={12} xl={3} >
            <Card>
              <div class="card-image">
                <img src="./photos/26.png" alt="ref" />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </Card>
          </Col>

          <Col s={12} xl={3} >
            <Card>
              <div class="card-image">
                <img src="./photos/18.png" alt="ref" />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </Card>
          </Col>

          <Col s={12} xl={3} >
            <Card>
              <div class="card-image">
                <img src="./photos/112.png" alt="ref" />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </Card>
          </Col>
          <Col s={12} xl={3} >
            <Card>
              <div class="card-image">
                <img src="./photos/112.png" alt="ref" />
              </div>
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
            </Card>
          </Col>
         
        </Row>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Reference;
