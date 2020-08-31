import React, { Component } from "react";
import { Col, Row } from "react-materialize";
class Footer extends Component {
  render() {
    return (
      <div>
        <Row className="footerrow">
          <Col xl={4} s={12}>
            <Row>
              <img
                src="photos/ikona_black.png"
                className="responsive-img"
                alt="htblogo"
                style={{ padding: "25px" }}
              />
              <br />
              <br />

              <div style={{ padding: "25px" }}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f fa-3x" />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram fa-3x" />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-3x" />
                </a>
                &nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in fa-3x" />
                </a>
              </div>
            </Row>
          </Col>

          <Col xl={4} s={12}>
            <h4 id="contact">Kontaktirajte nas</h4>

            <span>
              <i className="fas fa-map-marker-alt fa-2x" />
              <p>Kosi 11/6, Kosi</p>
            </span>
            <br />
            <span>
              <i className="fas fa-mobile-alt fa-2x" />
              <p>+385 91 271 8011</p>
            </span>
            <br />

            <span>
              <i className="fas fa-envelope fa-2x" />

              <p>
                <a href="mailto:info@htb-cnc.hr">info@htb-cnc.hr</a>
              </p>
            </span>
            <br />
          </Col>

          <Col xl={4} s={12}>
            <Row style={{ padding: "25px" }}>
              <span>
                OIB: 34956742498
                <br />
                Temeljni kapital: 20.000 kn uplaćen u cijelosti <br />
                Registriran na Trgovačkom sudu u Rijeci <br />
                MB: 04939719
                <br />
                <br />
                Poslovni račun: <br />
                IBAN:HR8423400091110950872 <br />
                ERSTE &amp;STEIERMÄRKISCHE BANK d.d.
                <br />
                Jadranski trg 3A, 51000 Rijeka
                <br />
                <br />
              </span>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
