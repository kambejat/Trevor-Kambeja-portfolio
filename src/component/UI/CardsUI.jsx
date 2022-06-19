import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faFileCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

class SlickFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    
    return (
      <Container fluid style={{ padding: "10px" }}>
        <Container>
          <Row className="row-cols-1 row-cols-md-3 mb-3 text-center">
            <Col>
              <Card className="mb-4 rounded-3 shadow-sm">
                <CardHeader className="py-3">
                  <h4 className="my-0 fw-normal">
                    <FontAwesomeIcon icon={faLayerGroup} />
                  </h4>
                </CardHeader>
                <CardBody>
                  <CardTitle>UI/UX Design</CardTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4 rounded-3 shadow-sm">
                <CardHeader className="py-3">
                  <h4 className="my-0 fw-normal">
                    <FontAwesomeIcon icon={faFileCode} />
                  </h4>
                </CardHeader>
                <CardBody>
                  <CardTitle>Frontend Development</CardTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4 rounded-3 shadow-sm">
                <CardHeader className="py-3">
                  <h4 className="my-0 fw-normal">
                    <FontAwesomeIcon icon={faDatabase} />
                  </h4>
                </CardHeader>
                <CardBody>
                  <CardTitle>Backend Development</CardTitle>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default SlickFlip;
