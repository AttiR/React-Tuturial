import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Records = () => {
    const orderIds = ["50", "100", "150"]

  return (
    <div>
      <Container className="my-5">
        <h1>Records</h1>
        {orderIds.map((recordId) => 
            <li key={recordId}>
                <Link to = {`/Dashboard/recordsdetails/${recordId}`}>View Records {recordId} </Link>
            </li>
        )}
      
      </Container>
    </div>
  );
};

export default Records;
