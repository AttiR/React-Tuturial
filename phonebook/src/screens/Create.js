import React from 'react';

// change the form in controlled compnent means anytime we put input values its stores in state
import { useState } from 'react';

/** steps to Add functionality 
 1. make constant which can track person and phonenumber (store contact in usestate)
 2. Pass back data to App.js
 3. store data in Array (usestate)
 4. Take Array and render separate components for each item
*/

const Create = (props) => {
  const [contact, setContact] = useState({ person: '', phonenumber: '' }); // initially store values as empty string
  // handlechange will recive event when its trigger, destructuring event to hold event.target.name nand value
  const handleChange = (event) => {
    const { value, name } = event.target;
    setContact({ ...contact, [name]: value }); // ...contact spread operator values do not change only name change which set to value
  };

  // we have to trigger a function in App.js to take Contact in App.js

  // on submit prevent the screen to flash
  function submitContact(event) {
    props.onContact(contact); // we set props value in App.js
    event.preventDefault();
  }

  return (
    <div className="my-5">
      <h2>Add New Contact</h2>

      <form style={{ width: '50%' }}>
        <input
          onChange={handleChange}
          type="text"
          value={contact.person}
          name="person"
          placeholder="Enter name"
        />{' '}
        <br />
        <input
          className="my-3"
          onChange={handleChange}
          type="number"
          value={contact.phonenumber}
          name="phonenumber"
          placeholder="Phonenumber"
        />
      </form>
      <button onClick={submitContact} className="btn btn-success my-3">
        Add Contact
      </button>
    </div>
  );
};

export default Create;
