import React, {useState} from 'react';
import { Container, Button } from 'react-bootstrap';

function App() {
  const [person, setPerson] = useState({firstname: '', lastname : '', email:''});
  
  function inputChange(event){
    setPerson({...person, [event.target.name]: event.target.value} ); // we will use name attribute to specift the attribute of state object
  }

  const showAlert= () =>
    alert(` Hello, ${person.firstname} ${person.lastname}`)

  function formSubmitted(event){
    event.preventDefault();
    // do something
  }  
  
  return (
    <div>
      <Container>
      First  Name : {person.firstname} , Last Name: {person.lastname} , Email: {person.email} <br/>
      <form onSubmit={formSubmitted}>
        <input placeholder='firstname' value={person.firstname} name= 'firstname' onChange={inputChange} /><br/>
        <input placeholder='lastname' value={person.lastname} name= 'lastname' onChange={inputChange}/><br/>
        <input placeholder='email' value={person.email} name= 'email' onChange={inputChange} /> <br/>
        <Button onClick= {showAlert} className='btn-success'>Add Info</Button>
      </form>
       
      </Container>
    </div>
  );
}

export default App;
