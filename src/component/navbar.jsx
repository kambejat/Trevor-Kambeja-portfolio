import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";

import history from "./Routes/history";
import Resume from "./css/Trevor Kambeja Resume.pdf"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      isToggleOn: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onColorChange = () => {

    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    return (
      <div className="main_menu sticky-top" id="main_menu">
        <Container fluid>
          <Container>
            <Row>
              <Col>
                <Navbar  dark expand="sm">
                  <NavbarBrand href="/" className="mr-auto">
                    kambeja<span>t</span>
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                  <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar className="ms-auto">
                      <NavItem>
                        <NavLink
                          href="#about"
                          onClick={() => history.push("/")}
                        >
                          About
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href={Resume}>Resume</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink onClick={() => history.push("/Contact")}>
                          Contact
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink onClick={this.onColorChange}>
                          {this.state.isToggleOn ? (
                            <FontAwesomeIcon icon={faToggleOn} />
                          ) : (
                            <FontAwesomeIcon icon={faToggleOff} />
                          )}
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}
