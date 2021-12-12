import React from 'react';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import { Routes, Route } from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <Header />
      <UserAuthContextProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
