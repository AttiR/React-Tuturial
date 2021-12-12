import React,{useState} from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useUserAuth(); // export logIn

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn( email, password);
      navigate('/')
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <Container className="py-4 form">
        <h2 className="py-3">Already have an Account Login Here</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
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
            style={{ margin: '0 0 15px 0' }}
            variant="success"
            type="submit"
          >
            Sign In
          </Button>{' '}
          <br />
          <small className="text-muted ">
            Don't have an Account?
            <Link className="mx-2" to="/signup">
              {' '}
              SignUp{' '}
            </Link>{' '}
          </small>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
