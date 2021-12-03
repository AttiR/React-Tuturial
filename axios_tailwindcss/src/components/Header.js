import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <header className='border-b flex p-3 justify-between items-center'>
        <spna clas>AppName</spna>
        <Navigation />
      </header>
    </Container>
  );
};

export default Header;
