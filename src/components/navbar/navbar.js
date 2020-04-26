import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar-styles.css";

const NavBar = () => {
  return (
    <header className="header">
      <Container>
        <Navbar className="navbar" bg="transparent" expand="lg">
          <Navbar.Brand href="/" className="navbar-brand" style={{ color: "#130c1d" }}>
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-lg-auto">
              <Nav.Link className="nav-item" href="/" style={{ color: "#130c1d" }}>
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="/movies" style={{ color: "#130c1d" }}>
                Movies
              </Nav.Link>
              <Nav.Link className="nav-item" href="/series" style={{ color: "#130c1d" }}>
                TV Series
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavBar;
