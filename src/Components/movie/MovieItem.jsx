import React, { useState } from "react";
import Card from "react-bootstrap/Card";

import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const MovieItem = ({ image, name, desc, movieId, theatreId, price }) => {
  const navigate = useNavigate();
  const { booking, setBooking, loggedInUser } = useContext(UserContext);

  return (
    <div>
      <Card className="text-dark rounded my-2" key={movieId}>
        {/* {`data:image/jpeg;base64,${image}`} */}
        <Card.Img
          variant="top"
          src={`data:image/jpeg;base64,${image}`}
          className="fitToContent"
        />
        <Card.Body>
          <Card.Title className="fs-5 text-center mb-3">{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button
            variant="secondary"
            className="w-100"
            onClick={(e) => {
              e.preventDefault();
              setBooking({
                ...booking,
                userId: loggedInUser.userId,
                movieId: movieId,
                theatreId: theatreId,
                price: price,
                name: name,
              });
              navigate("/tickets");
            }}
          >
            Book
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieItem;
