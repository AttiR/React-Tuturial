import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import { Routes, Route } from 'react-router-dom';
import {UserAuthContextProvider} from './context/UserAuthContext';

function App() {
  return (
    <div>
      <Header />
      <UserAuthContextProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/*" element={<Notfound />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
