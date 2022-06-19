import React, { Component } from "react";
import {
  Button,
  Container,
  FormGroup,
  Input,
  Row,
  Form,
  Col,
  ListGroup,
  ListGroupItem,
  NavLink,
} from "reactstrap";
import Footer from "./footer";
import * as emailjs from "emailjs-com";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobilePhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, message } = this.state;

    let templateParams = {
      from_name: name,
      to_name: "kambejat@gmail.com",
      name: name,
      email: email,
      message: message
    };

    emailjs.send(
      "",
      "",
      templateParams,
      ""
    )
    .then((response) => {
      alert("Sent Successfully", response.status, response.text)
    }, (err) => {
      alert("Try Again", err)
    }) 

    this.resetForm();
  };

  handleChange = (param, event) => {
    this.setState({ [param]: event.target.value })
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <Container fluid className="form_padding">
        <Container>
          <div className="head">
            <div className="heading">Get In Touch</div>
          </div>
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this, 'name')}
                    placeholder="Your Name"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder="Your email"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                    placeholder="Enter Your Message"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Button type="submit">Submit</Button>
                </FormGroup>
              </Form>
            </Col>
            <Col>
              <ListGroup>
                <ListGroupItem>
                  <NavLink>
                    <FontAwesomeIcon icon={faMailBulk} />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                      <h6 className="mb-0">kambejat@gmail.com</h6>
                    </div>
                  </NavLink>
                </ListGroupItem>
                <ListGroupItem className="d-flex gap-3 py-3" action>
                  <NavLink
                    href="tel:+265885768691"
                    className="d-flex gap-3 py-3"
                  >
                    <FontAwesomeIcon icon={faMobilePhone} />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                      <h6 className="mb-0">+265 885 76 86 91</h6>
                    </div>
                  </NavLink>
                </ListGroupItem>
                <ListGroupItem>
                  <NavLink href="https://wa.link/4z6312">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <div className="d-flex gap-2 w-100 justify-content-between">
                      <h6 className="mb-0">click</h6>
                    </div>
                  </NavLink>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    );
  }
}

export default Contact;
