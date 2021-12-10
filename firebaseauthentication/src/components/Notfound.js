import React from 'react';
import { Container } from 'react-bootstrap';

const Notfound = () => {
  return (
    <div>
      <Container className="py-5">
        <center>
          {' '}
          <h2>Page Not Found!</h2>
        </center>
      </Container>
    </div>
  );
};

export default Notfound;
