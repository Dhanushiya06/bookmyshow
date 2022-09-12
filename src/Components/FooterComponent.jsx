import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterComponent = () => {
  return (
    <Container fluid className="bg-dark text-light text-center  p-3 w-100 position:absolute">
      <Row>
        <Col> Copyrights @Shiyaa Shows!!!</Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
