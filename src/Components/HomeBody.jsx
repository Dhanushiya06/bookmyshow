import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import Title from "./Title";

const HomeBody = ({ children, title }) => {
  return (
    <div>
      <Stack gap={1} className="bg-dark bg-opacity-10">
        <Container>
          <div className="d-flex flex-column justify-content-end align-items-start my-3">
            <Title title={title} />
          </div>
        </Container>
        <Container>
          <Row>{children}</Row>
        </Container>
      </Stack>
    </div>
  );
};

export default HomeBody;
