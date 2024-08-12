import React from 'react';
import {
  Navbar, Nav, NavDropdown, Container, Button,
} from 'react-bootstrap';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      {/* logo */}
      <Navbar bg="white" expand="lg" />
      <Container
        fluid
        className="d-flex justify-content-evenly align-items-center g-5 flex-grow-1 "
      >
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            height="130"
            className="d-inline-block align-top px-3"
          />
        </Navbar.Brand>
        {/* links */}
        <Nav className="align-items-center pe-3 d-flex justify-content-center fs-5 color-titles">
          <Nav.Link href="#locations" className="color-titles fw-bold">
            Locations
          </Nav.Link>
          <Nav.Link href="#education" className="color-titles fw-bold">
            Education
          </Nav.Link>
          <Nav.Link href="#gallery" className="color-titles fw-bold">
            Gallery
          </Nav.Link>
          <Nav.Link href="#dates" className="color-titles fw-bold">
            Dates
          </Nav.Link>
          <NavDropdown
            title="About-us"
            id="basic-nav-dropdown"
            className="color-titles custom-dropdown fw-bold"
          >
            <NavDropdown.Item
              href="#action/3.1"
              className="color-titles fw-bold"
            >
              Information
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.1"
              className="color-titles fw-bold"
            >
              Jobs
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.1"
              className="color-titles fw-bold"
            >
              Company
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button
          variant="warning"
          type="button"
          size="sm"
          className="btn-register align-items-center fs-5 rounded fw-bold"
        >
          Register your child
        </Button>
      </Container>
    </header>
  );
}

export default Header;
