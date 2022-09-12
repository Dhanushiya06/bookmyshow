import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Movie = ({ image, name, desc }) => {
  return (
    <div>
      <Card className="text-dark rounded my-2">
        <Card.Img variant="top" src={image} className="fitToContent" />
        <Card.Body>
          <Card.Title className="fs-5 text-center mb-3">{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Link to="/tickets">
            <Button variant="secondary" className="w-100">
              Book
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
