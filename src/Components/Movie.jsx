import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Bachelor from "../assets/images/bachelor.jpg";

const Movie = () => {
  return (
    <div>
      <Card className=" my-2">
        <Card.Img variant="top" src={Bachelor} className="fitToContent" />
        <Card.Body>
          <Card.Title className="fs-5 text-center mb-3">Bachelor</Card.Title>
          <Card.Text>DUmm dsds sd fs sfkmsfdk daad adjnad ad adakndkan</Card.Text>
          <Button variant="primary" className="w-100">
            Book
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
