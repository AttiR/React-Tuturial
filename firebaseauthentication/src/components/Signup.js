import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth(); // export signUp

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(name, email, password);
     
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Container className="py-5 form">
        <h2 className="py-3">Register for Free</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
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
