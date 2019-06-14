import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import { Radio, Switch, Checkbox, Input, Form, Fieldset } from "../components/Form";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="center">Before You Watch</h1>
          </Col>
        </Row>

        <Row>
          <Col size="m3 show-on-medium-and-up"
            id="adspace1"
          >

          </Col>

          <Col size="s12 m6">
            <Form action="/movie/get" method="GET">
              <Input name="movie_name" id="movie_name">Search for Movie</Input>
            </Form>
          </Col>
          
          <Col size="m3 show-on-medium-and-up"
            id="adspace2"
          ></Col>
        </Row>
      </Container>
    );
  }
}

export default Home;