import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
      </Container>
    </div>
  );
};

export default Dashboard;
