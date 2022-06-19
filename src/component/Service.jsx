import React, { Component } from "react";
import { Container } from "reactstrap";
import SliderUI from "./UI/CardsUI";

class MainService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [],
      isLoading: true,
      errors: false,
    };
  }

  render() {
    return (
      <Container fluid className='sectiion_padding'>
        <Container>
          <div className="head">
            <div className="heading">What I do</div>
          </div>
          <SliderUI />
        </Container>
      </Container>
    );
  }
}

export default MainService;
