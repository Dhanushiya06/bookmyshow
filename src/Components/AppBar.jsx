import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useState } from "react";
import { useEffect } from "react";
import movieApi from "../api/movieApi";

const AppBar = () => {
  const { loggedInUser } = useContext(UserContext);
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    movieApi
      .get(`/theatre/all`)
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data) {
          setTheatres(res.data.data);
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
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          {loggedInUser.role === "ADMIN" ? (
            <Navbar.Brand as={Link} to="/admin">
              SHIYAA SHOWS!!
            </Navbar.Brand>
          ) : (
            <Navbar.Brand as={Link} to="/">
              SHIYAA SHOWS!!
            </Navbar.Brand>
          )}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* {loggedInUser.role !== "ADMIN" ? (
                <NavDropdown title="Theatres" id="basic-nav-dropdown">
                  <>
                    {theatres.map((theatre) => (
                      <NavDropdown.Item key={theatre.id} href="/movie">
                        {theatre.theatreName}
                      </NavDropdown.Item>
                    ))}
                  </>
                </NavDropdown>
              ) : null} */}

              {loggedInUser.isLoggedIn ? (
                <>
                  {loggedInUser.role === "ADMIN" ? (
                    <Nav.Link as={Link} to="/login">
                      Logout
                    </Nav.Link>
                  ) : (
                    <>
                      <Nav.Link as={Link} to="/history">
                        History
                      </Nav.Link>
                      <Nav.Link as={Link} to="/login">
                        Logout
                      </Nav.Link>
                    </>
                  )}
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
