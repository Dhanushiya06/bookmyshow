import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
const AddTheatreComponent = () => {
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
                />
              </div>
              <div className="mb-3">
                <textarea class="form-control" rows="3"></textarea>
              </div>
              <div className="mb-3">
                <input className="form-control" type="file" id="formFile" />
              </div>
              <Link to={"/movie"}>
              <button type="submit" className="btn btn-primary">
                 Add Theatre 
              </button></Link>
            </form>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddTheatreComponent;
