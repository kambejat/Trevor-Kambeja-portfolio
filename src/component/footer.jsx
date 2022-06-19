import React, { Component } from "react";
import { Container, Col, Nav, NavLink, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    let date = new Date().getFullYear();

    return (
      <Container fluid className="footer">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <Col md="4" className="d-flex ">
            <span className="text-muted">&copy; {date} kambejat, Inc</span>
          </Col>
          <Nav className="social-icon ms-auto">
            <NavItem>
              <NavLink href="https://www.facebook.com/Developer-site-100841584875864">
                <FontAwesomeIcon icon={faFacebook} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://twitter.com/kambe67">
                <FontAwesomeIcon icon={faTwitter} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Container>
    );
  }
}

export default Footer;
