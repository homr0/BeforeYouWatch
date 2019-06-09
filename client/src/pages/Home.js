import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="center">Before You Watch</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;