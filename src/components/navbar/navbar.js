import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <header className="header">
      <Container fluid className="nav-container" style={{ backgroundColor: "#49327b" }}>
        <Navbar className="navbar" bg="" expand="lg">
          <Navbar.Brand href="/" className="navbar-brand" style={{ color: "#f4b942" }}>
            WHATCH ME!
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler"
            style={{
              borderColor: "#f4b942",
            }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-lg-auto">
              <Nav.Link className="nav-item active" href="/" style={{ color: "#f1e9da" }}>
                /home
              </Nav.Link>
              <Nav.Link className="nav-item" href="/movies" style={{ color: "#f4b942" }}>
                /movies
              </Nav.Link>
              <Nav.Link className="nav-item" href="/series" style={{ color: "#f4b942" }}>
                /tvseries
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default NavBar;
