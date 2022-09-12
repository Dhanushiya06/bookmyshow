import React, { useContext, useEffect, useState } from "react";
import HomeBody from "./HomeBody";
import Movie from "./Movie";
import { Col } from "react-bootstrap";
import movieApi from "../api/movie";

const MovieComponent = ({ title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log("Called");
    movieApi
      .get(`/movie/all`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          setMovies(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  }, []);

  return (
    <HomeBody title={title}>
      {movies.length > 0 ? (
        movies.map((movie, index) => {
          return (
            <Col xs={3} key={index}>
              <Movie
                image={movie.image}
                name={movie.movieName}
                desc={movie.description}
                movie={movie.movieId}
                date={movie.date}
                price={movie.price}
              />
            </Col>
          );
        })
      ) : (
        <p>No movies to view</p>
      )}
    </HomeBody>
  );
};

export default MovieComponent;