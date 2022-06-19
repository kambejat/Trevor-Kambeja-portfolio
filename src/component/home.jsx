import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";

class App extends Component {
  state = {
    information: [],
    isLoading: true,
    errors: null,
  };

  getAbout() {
    axios
      .get("http://127.0.0.1:8000/about/about/")
      .then((response) =>
        response.data.map((user) => ({
          id: `${user.id}`,
          name: `${user.name}`,
          description: `${user.description}`,
          numberOfYears: `${user.numberOfYears}`,
        }))
      )
      .then((information) => {
        this.setState({
          information,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getAbout();
  }

  render() {
    const { isLoading, information } = this.state;
    return (
      <React.Fragment>
        <Container fluid className="about-part section_padding" id="about">
          <Container>
            <Row>
              <Col lg="6">
                <div className="about_text">
                  <h4 className="header">about me</h4>
                  <p>
                    {!isLoading ? (
                      information.map((user) => {
                        const { id, name, description, numberOfYears } = user;
                        return (
                          <div key={id}>
                            <p className="experiance">{name}</p>
                            <p>{description}</p>
                            <div className="experiance">
                              <h2>
                                {numberOfYears}
                                <p>
                                  years of experiance
                                </p>
                              </h2>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <p>Loading.......</p>
                    )}
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="experiance_list">
                  <h4 className="header">experience</h4>
                  <div className="experiance_list_iner">
                    <div className="single_experiance_list">
                      <h4>software developer</h4>
                      <p>at freelancer</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>      
      </React.Fragment>
    );
  }
}
export default App;
