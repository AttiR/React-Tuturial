import React from 'react';
import { Card } from 'react-bootstrap';

const Contacts = (props) => {
  return (
    <div className="my-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Name: {props.person}</Card.Title>
          <Card.Text>
            <small>Phonenumber: {props.phonenumber}</small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contacts;
