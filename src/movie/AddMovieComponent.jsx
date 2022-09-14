import React from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import AppBar from "../Components/AppBar";

import movieApi from "../api/movieApi";

let INITIAL_VALUE = {
  movieName: "",
  price: "",
  description: "",
  fileId: 0,
  date: "",
  theatreId: 25,
  availableTickets: 50,
};

const AddMovieComponent = () => {
  const [movie, setMovie] = useState(INITIAL_VALUE);
  const [movieError, setMovieError] = useState(INITIAL_VALUE);

  const navigate = useNavigate();

  const uploadFile = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log(event.target.files[0]);
    formData.append("file", event.target.files[0]);
    axios
      .post("http://localhost:8080/api/uploadFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(
        (response) => {
          let data = response.data;
          if (data.data) {
            setMovie({ ...movie, fileId: data.data.id });
          } else if (data.error) {
            console.log(data.error.message);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
      <AppBar/>
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
                        date: "Invalid date",
                      });
                    }
                    setMovie({ ...movie, date: mDate });
                  }}
                />
                <label className="text-danger">{movieError.date}</label>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
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
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  onChange={(event) => {
                    uploadFile(event);
                  }}
                />
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
