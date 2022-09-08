import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
const AppBar = () => {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            SHIYAA SHOW!!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/movie">
                Movies
              </Nav.Link>
              <NavDropdown title="Theatres" id="basic-nav-dropdown">
                <NavDropdown.Item href="#pvr">PVR Cinema </NavDropdown.Item>
                <NavDropdown.Item href="#inox">Inox</NavDropdown.Item>
                <NavDropdown.Item href="rohini">
                  Rohini Theatre
                </NavDropdown.Item>
                <NavDropdown.Item href="mayajaal">Mayajaal</NavDropdown.Item>
                <NavDropdown.Item href="national">National Theatre</NavDropdown.Item>
                <NavDropdown.Item href="palazoo">Palazoo</NavDropdown.Item>
                <NavDropdown.Item href="luxe">Luxe</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/history">
                History
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
