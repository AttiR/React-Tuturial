import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import Orders from './Orders';
import Records from './Records';
import Recordsdeatils from './Recordsdeatils';


const Dashboard = () => {
  return (
    <div>
      <Container className="my-5">
        <h1>Welcome, Explore Nested Routes</h1>
        <ul>
          <li>
            <Link to="">Profile</Link>
          </li>
          <li>
            <Link to="records">Records</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
        </ul>

        <div>
          <Routes>
            <Route path="/" element={<Profile />}></Route>
            <Route path="records" element={<Records />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="recordsdetails/:recordId" element={<Recordsdeatils />}></Route>
          </Routes>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
