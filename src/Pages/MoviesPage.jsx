import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppBar from "../Components/AppBar";
import FooterComponent from "../Components/FooterComponent";
import MovieComponent from "../Components/MovieComponent";

const MoviesPage = () => {
  return (
    <div>
      <AppBar />
      <MovieComponent title={"MOVIES"} />
      <FooterComponent />
    </div>
  );
};

export default MoviesPage;
