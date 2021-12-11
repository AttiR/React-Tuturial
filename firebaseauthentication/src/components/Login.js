import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleButton from 'react-google-button';

const Login = () => {
  return (
    <div>
      <Container className="py-4 form">
        <h2 className='py-3'>Already have an Account Login Here</h2>

        <GoogleButton className="g-btn " type="dark" />

        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            style={{ margin: '0 0 15px 0' }}
            variant="success"
            type="submit"
          >
            Sign In
          </Button>{' '}
          <br />
          <small className="text-muted ">
            Don't have an Account?
            <Link className="mx-2" to="/signup"> SignUp
              {' '}
            </Link>{' '}
          </small>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
