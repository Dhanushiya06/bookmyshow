import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import movieApi from "../../api/movieApi";

let INITIAL_VALUE = {
  theatreName: "",
  tickets: "",
};

const AddTheatreComponent = () => {
  const [theatre, setTheatre] = useState(INITIAL_VALUE);

  const navigate = useNavigate();

  const addAPI = (event, id) => {
    event.preventDefault();
    movieApi
      .post(`/theatre`, theatre)
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
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Theatre name"
                  value={theatre.theatreName}
                  onChange={(e) =>
                    setTheatre({
                      ...theatre,
                      theatreName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="3"></textarea>
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
                Add theatre
              </button>
            </form>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddTheatreComponent;
