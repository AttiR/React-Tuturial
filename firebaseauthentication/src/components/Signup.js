import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <Container className="py-5 form">
        <h2 className="py-3">Register for Free</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            style={{ margin: '0 0 15px 0' }}
          >
            Register
          </Button>
          <br />

          <small>
            Already have an account?{' '}
            <Link className="mx-2" to="/login">
              Login
            </Link>
          </small>
        </Form>
      </Container>
    </div>
  );
};

export default Signup;
