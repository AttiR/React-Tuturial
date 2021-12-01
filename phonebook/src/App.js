import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

import Home from './screens/Home';
import Contacts from './screens/Contacts';
import Create from './screens/Create';
import { Routes, Route } from 'react-router-dom';
//import contacts from './Data'; // we will pass data through map

/*function createContacts(contactItem){    

  return <Contacts 
    key={contactItem.key}
    person={contactItem.person}
    phonenumber={contactItem.phonenumber}
  />*

} Lets make arrow function and shift it in map()*/
function App() {

  const [contacts, setContacts] = useState([]); // store new contact in array

  function addContact(contact){ // contact from Create (we are receiving contact)
    // validation if the person already exist
   
    setContacts(prevContacts => {
      
      return [...prevContacts, contact] // will return newly created contact

    })

  }
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/*** <Route path="/Create" element={<Contacts />} /> */}
          {/*** <Route path="/Create" element={<Contacts  pserson = 'Atti' phonenumber = '12345678'/>} /> */}

          <Route
            path="/Contacts"
            element={contacts.map(contactItem => 
              
                <Contacts
                  key={contactItem.key}
                  person={contactItem.person}
                  phonenumber={contactItem.phonenumber}
                />
            
            )}
          />

          <Route path="/Create" element={<Create onContact = {addContact} />} /> {/*** set props value for create */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
