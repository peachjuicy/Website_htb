import React, { Component } from "react";
import { Container, Row, Col } from "react-materialize";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
class Content extends Component {
  render() {
    return (
      <div>
        <Row>
          <ScrollAnimation animateIn="fadeIn">
            <h5>Lorem ipsum</h5>
            <Row>
          <Container
            style={{ background: "#FF0000", opacity: "0.8", height: "2px" }}
          />
        </Row>
          </ScrollAnimation>
          <Col xl={1} s={12} />
          <Col xl={4} s={12}>
            <ScrollAnimation animateIn="fadeInLeft">
              <h5>At vero eos et accusamus</h5>
              <p style={{ textAlign: "justify" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </p>
            </ScrollAnimation>
          </Col>

          <Col xl={1} s={12} />
          <ScrollAnimation animateIn="fadeInRight">
            <Col xl={6} s={12}>
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
export default Content;
