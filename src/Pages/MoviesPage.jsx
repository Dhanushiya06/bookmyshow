import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import AppBar from "../Components/AppBar";
import AppBody from "../Components/AppBody";
import Movie from "../Components/Movie";

import { movies } from "../data/dummy";

const MoviesPage = () => {
  return (
    <div>
      <AppBody>
        <AppBar />
        <Container>
          <h3 className="fs-3 my-4">Movie</h3>
          <Row>
            {movies.map((movie, index) => {
              return (
                <Col xs={3}>
                  <Movie image={movie.image} name={movie.name} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </AppBody>
    </div>
  );
};

export default MoviesPage;
