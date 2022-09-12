import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const AppBar = () => {
  const { loggedInUser } = useContext(UserContext);

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
                <NavDropdown.Item href="/movie">PVR Cinema </NavDropdown.Item>
              </NavDropdown>
              {loggedInUser.isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/history">
                    History
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin">
                    Admin
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
