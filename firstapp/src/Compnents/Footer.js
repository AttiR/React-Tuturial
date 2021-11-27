import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className='footer'>
        <Row>
          <Col className="text-center">
            <p>Coprights, &copy, 2021</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
