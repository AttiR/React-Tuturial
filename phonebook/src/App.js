import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Notfound from './components/Notfound';
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
  // pass Contacts to /contacts as props and setContacts to /setContacts

  
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
            element={
              
                <Contacts
                  contacts= {contacts}
                />
            
            }
          />

          <Route path="/Create" element={<Create setContacts = {setContacts} />} />  {/*** set props value for create */}
          <Route path="*" element={<Notfound />} /> 
        </Routes>
      </Container>
    </>
  );
}

export default App;
