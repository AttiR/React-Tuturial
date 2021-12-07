import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Product from './screens/Product';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/products/:id" element={<Product />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
