import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import movieApi from "../api/movie";
import { useState } from "react";

let INITIAL_ERROR = {
  movieName: "",
  price: "",
  description: "",
  image: "",
  date: "",
};

let INITIAL_VALUE = {
  movieName: "",
  price: "",
  description: "",
  image: "",
  date: "",
};

const AddMovieComponent = () => {
  const [movie, setMovie] = useState(INITIAL_VALUE);
  const [movieError, setMovieError] = useState(INITIAL_ERROR);

  const navigate = useNavigate();

  const addAPI = (event, id) => {
    event.preventDefault();
    movieApi
      .post(`/movie`, movie)
      .then((res) => {
        if (res.data.data) {
          navigate("/movie");
          // setMovies(res.data.data);
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };

  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col xs={2}></Col>
          <Col>
            <form>
              <p className="fs-4 fs-bold">Add Movie</p>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Movie name"
                  value={movie.movieName}
                  onChange={(event) => {
                    let mName = event.target.value;
                    if (mName.length > 2) {
                      setMovieError({
                        ...movieError,
                        movieName: "",
                      });
                    } else {
                      setMovieError({
                        ...movieError,
                        movieName: "Invalid Movie name",
                      });
                    }
                    setMovie({ ...movie, movieName: mName });
                  }}
                />
                <label className="text-danger">{movieError.movieName}</label>
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={movie.price}
                  onChange={(event) => {
                    let mPrice = event.target.value;
                    if (parseInt(mPrice) > 99) {
                      setMovieError({
                        ...movieError,
                        price: "",
                      });
                    } else {
                      setMovieError({
                        ...movieError,
                        price: "Invalid Price",
                      });
                    }
                    setMovie({ ...movie, price: mPrice });
                  }}
                />
                <label className="text-danger">{movieError.price}</label>
              </div>
              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  placeholder="date"
                  value={movie.date}
                  onChange={(event) => {
                    let mDate = event.target.value;
                    if (mDate) {
                      setMovieError({
                        ...movieError,
                        date: "",
                      });
                    } else {
                      setMovieError({
                        ...movieError,
                        date: "Invalid Price",
                      });
                    }
                    setMovie({ ...movie, date: mDate });
                  }}
                />
                <label className="text-danger">{movieError.date}</label>
              </div>
              <div className="mb-3">
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="description"
                  value={movie.description}
                  onChange={(event) => {
                    let mDescription = event.target.value;
                    if (mDescription.length > 50) {
                      setMovieError({
                        ...movieError,
                        description: "",
                      });
                    } else {
                      setMovieError({
                        ...movieError,
                        description: "Invalid Description",
                      });
                    }
                    setMovie({ ...movie, description: mDescription });
                  }}
                />
                <label className="text-danger">{movieError.description}</label>
              </div>
              <div className="mb-3">
                <input className="form-control" type="file" id="formFile" />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(event) => {
                  event.preventDefault();
                  addAPI(event);
                }}
              >
                Add movie
              </button>
            </form>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddMovieComponent;
