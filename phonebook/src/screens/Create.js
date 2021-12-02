import React from 'react';

// change the form in controlled compnent means anytime we put input values its stores in state
import { useState } from 'react';
import uniqid from 'uniqid'

//


/** steps to Add functionality 
 1. make constant which can track person and phonenumber (store contact in usestate)
 2. Pass back data to App.js
 3. store data in Array (usestate)
 4. Take Array and render separate components for each item
*/

const Create = ({setContacts}) => { // we can also {setContact} insted of props
  const [contact, setContact] = useState({ person: '', phonenumber: '' });
  const[id, setId] = useState(uniqid)

  // handlechange will recive event when its trigger, destructuring event to hold event.target.name nand value
  const handleChange = (event) => {
    const { value, name } = event.target;
    setContact({ ...contact, [name]: value, id }); // ...contact spread operator values do not change only name change which set to value
  };

  // we have to trigger a function in App.js to take Contact in App.js

  // on submit prevent the screen to flash
  function addContact(event) {
    event.preventDefault();
    
    setContacts(prevContacts => [...prevContacts, contact]) // new contact created
    setId(uniqid())   // will set unique id
    setContact({person: '', phonenumber: ''}) // to set form clear
   
  }

  return (
    <div className="my-5">
      <h2>Add New Contact</h2>

      <form className='add-form' style={{ width: '50%' }}>
      
        <input className='form-control'
          onChange={handleChange}
          type="text"
          value={contact.person}
          name="person"
          placeholder="Enter name"
        />{' '}
       
        <input
          className="form-control my-3"
          onChange={handleChange}
          type="number"
          value={contact.phonenumber}
          name="phonenumber"
          placeholder="Phonenumber"
        />
      </form>
      <button onClick={addContact} className="btn btn-success my-3">
        Add Contact
      </button>
    </div>
  );
};

export default Create;
