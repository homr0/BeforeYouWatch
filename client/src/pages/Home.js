import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import {  Input, Form } from "../components/Form";

const Home = () => {
  const [query, setQuery] = useState({
    title: ""
  });

  const [results, setResults] = useState({
    search: []
  });

  const [prev, setPrev] = useState({
    title: ""
  });

  const handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setPrev({
      [name]: query[name]
    });

    setQuery({
      [name]: value
    });
  }

  useEffect(() => {
    if(prev.title !== query.title) {
      setPrev({
        title: query.title
      });

      API.movieSearch(query)
      .then(response => {
        setResults({
          search: response.data
        });
      });
    }
    console.log(results.search);
  }, [query, prev.title, results]);

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
          <Row>
            <Col>
              <Form>
                <Input 
                  name="title"
                  id="movie_name"
                  handleInputChange={handleInputChange}>
                  Search for Movie
                </Input>
            </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              {(results.search.length > 0) ? results.search.map(movie => <p>{movie.Title}</p>) : <p>No movie results</p>}
            </Col>
          </Row>
        </Col>
        
        <Col size="m3 show-on-medium-and-up"
          id="adspace2"
        ></Col>
      </Row>
    </Container>
  );
}

export default Home;