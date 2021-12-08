import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Container className="p-5">
        <Login />
      </Container>
    </div>
  );
}

export default App;
