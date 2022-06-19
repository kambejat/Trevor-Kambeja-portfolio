import React, { Component } from "react";
import Home from "./home";
import { Col, Container, Row } from "reactstrap";
import ParticlesBg from "particles-bg";
import { Animated } from "react-animated-css";

import Service from "./Service";
import FeedBack from "./UI/Feedback";
import Footer from "./footer";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 768px)"),
    };
  }

  handleLoader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      </div>
    );
  };

  componentDidMount = () => {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addListener(handler);

    window.onload = function () {
      setInterval(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
      }, 100);
    };

    var item = 0;
    var text = "I'm Trevor kambeja.";
    var speed = 150;

    const typeWriter = () => {
      if (item < text.length) {
        document.getElementById("type").innerHTML += text.charAt(item);
        item++;
        setTimeout(typeWriter, speed);
      }
    };

    window.onmouseup = typeWriter();
  };

  bannerHome = () => {
    return (
      <div>
        <Container fluid id="site-landing" className="section_padding banner">
          <Container>
            <Row>
              <Col lg="12">
                <div className="cd-headline">
                  <h1>
                    Hi, <span id="type"></span>
                  </h1>
                  <Animated animationInDelay={1000} animationIn="wobble" isVisible={true}>
                    <h4>I'm a Software Developer</h4>
                  </Animated>
                </div>
              </Col>
            </Row>
          </Container>

          <ParticlesBg type="cobweb" num={45} bg={true} color="#f8f9fa" />
        </Container>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        {this.handleLoader()}
        {this.bannerHome()}        
        <Home />
        <Service />
        <FeedBack />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
