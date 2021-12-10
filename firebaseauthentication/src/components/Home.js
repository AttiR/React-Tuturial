import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Container className='py-5'>
        <h2> React + Firebase Authentication </h2>
        <p>
          Authentication App to create new users, login and logout
          functionality. <br/>We will see how to use Context Api to management Auth
          state in the application.{' '}
        </p>
      </Container>
    </div>
  );
};

export default Home;
