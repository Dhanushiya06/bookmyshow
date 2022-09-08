import React from "react";
import Container from "react-bootstrap/esm/Container";
const AppBody = ({ children }) => {
  return (
    <div>
      <Container fluid className="bg-dark bg-opacity-10 p-0 pb-3">
        {children}
      </Container>
    </div>
  );
};

export default AppBody;
