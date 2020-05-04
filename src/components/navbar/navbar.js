import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <header className="header">
      <Container fluid className="nav-container">
        <Navbar className="navbar" bg="" expand="lg" style={{ color: "#ed254e" }}>
          <Navbar.Brand href="/" className="navbar-brand" style={{ color: "#f4b942" }}>
            WHATCH ME!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-lg-auto">
              <Nav.Link className="nav-item active" href="/" style={{ color: "#f4b942" }}>
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" href="/movies" style={{ color: "#f4b942" }}>
                Movies
              </Nav.Link>
              <Nav.Link className="nav-item" href="/series" style={{ color: "#f4b942" }}>
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
