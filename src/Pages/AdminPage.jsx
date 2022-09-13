import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppBar from "../Components/AppBar";
import UserComponent from "../Components/UserComponent";
import MovieTableComponent from "../Components/movie/MovieTableComponent";
import TheatreTableComponent from "../Components/theatre/TheatreTableComponent";
import FooterComponent from "../Components/FooterComponent";

const AdminPage = () => {
  return (
    <div>
      <AppBar />
      <Container>
        <Row>
          <Col>
            <MovieTableComponent />
          </Col>
          <Col>
            <TheatreTableComponent />
          </Col>
        </Row>
        <Row>
          <Col>
            <UserComponent />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </div>
  );
};

export default AdminPage;
