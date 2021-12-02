import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Phonebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/Contacts">
                Contacts
              </Nav.Link>

              <Nav.Link as={Link} to="/Create">
                New_Contact
              </Nav.Link>
             
              <Nav.Link as={Link} to="/Dashboard">
                Dashboard
              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
