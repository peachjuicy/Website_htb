import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-materialize";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 43.94333, lng: 15.45194 }}
    >
      <Marker position={{ lat: 43.94333, lng: 15.45194 }} />
    </GoogleMap>
  ))
);

class Contact extends Component {
  render() {
    return (
      <div>
      <ScrollAnimation animateIn="fadeInDown" >
        <h5>Contact us</h5>
        <Row>
          <Container
            style={{ background: "#FF0000", opacity: "0.8", height: "2px" }}
          />
        </Row>
        <Row>
          <Col xl={1} />
          <Col s={12} xl={4}>
            <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbL5LIT7LMGC6Gs1ec6ZrNCni_TM2wFWQ&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={
                <div
                  style={{
                    height: `100%`,
                    borderRadius: "5px"
                  }}
                />
              }
            />
          </Col>
          <Col xl={2} />
          <Col s={12} xl={4}>
            <form method="POST" action="send-mail.php">
              <Row>
                <input
                  type="text"
                  placeholder="Name"
                  name="first_name"
                  className="input-field "
                  onChange={this.handleChange}
                />
              </Row>

              <Row>
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  className="input-field "
                  onChange={this.handleChange}
                />
              </Row>

              <Row>
                <textarea
                  placeholder="Message"
                  rows="10"
                  cols="30"
                  className="materialize-textarea input-field "
                  name="comments"
                  onChange={this.handleChange}
                />
              </Row>

              <div className="row center-align">
                <Button
                  className="btn waves-effect waves-light amber"
                  type="submit"
                  name="action"
                >
                  Send
                  <i className="material-icons right">send</i>
                </Button>
              </div>
            </form>
          </Col>
          <Col xl={1} />
        </Row>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Contact;
