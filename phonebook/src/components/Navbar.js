import React from 'react'
import { Container, Nav, Form, Button, FormControl } from 'react-bootstrap'

const Navbar = () => {
    return (
        <header>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Phonebook</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Contacts</Nav.Link>
        <Nav.Link href="#action3">Create Contact</Nav.Link>
        
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Navbar
