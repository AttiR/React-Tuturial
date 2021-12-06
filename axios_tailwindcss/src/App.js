import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />

      <main className="min-height-3/4">
        <Container className='p-4'>
        
          Welcome , The App 
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
