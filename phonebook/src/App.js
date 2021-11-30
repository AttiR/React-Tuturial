import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

import Home from './screens/Home';
import Contacts from './screens/Contacts';
import Create from './screens/Create';
import { Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/Contacts" element={<Contacts />} />

          <Route path="/Create" element={<Create />} />
        </Routes>
      
      </Container>
    </>
  );
}

export default App;
