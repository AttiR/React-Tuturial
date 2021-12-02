
import React from 'react';
import { Container, Card } from 'react-bootstrap';
// we can use props then props.contacts or {conatcs}
const Contacts = ({ contacts}) => {
  
  
  return (
    <div className="my-5">
      <Container>
        {contacts.map((contactItem, index) => (
          <Card
            key={contactItem.id}
            style={{ width: '18rem' }}
            className="my-3 mx-3"
          >
            <Card.Body>
              <Card.Title>Name: {contactItem.person}</Card.Title>
              <Card.Text>Phonenumber: {contactItem.phonenumber}</Card.Text>
             
            </Card.Body>
          </Card>
        ))}
      </Container>

      {/*<Table striped bordered hover size="sm"> 
      <thead>
        <th>index</th>
        <th>Name</th>
        <th>Phonenumber</th>
      </thead>
        <tbody>
     
          {props.contacts.map((contactItem, index) => 
            <tr key={index}>
              <td>{index}</td>
              <td> {contactItem.person}</td>
              <td> {contactItem.phonenumber}</td>
            
              
            </tr>
        )}
        </tbody>
      </Table>**/}
    </div>
  );
};

export default Contacts;
