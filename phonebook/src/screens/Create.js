import React from 'react';

// change the form in controlled compnent means anytime we put input values its stores in state
import { useState } from 'react';

const Create = () => {
  const [data, setData] = useState({ person: '', phonenumber: '' }); // initially store values as empty string
  // handlechange will recive event when its trigger, destructuring event to hold event.target.name nand value
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value }); // ...data spread operator values do not change only name change which set to value
    console.log(data);
  };

  // now we need to pass data to Array that will happen in App.js for that we need state

  
  return (
    <div className="my-5">
      <h2>Add New Contact</h2>

      <form style={{ width: '50%' }}>
        <input
          onChange={handleChange}
          type="text"
          value={data.person}
          name="person"
          placeholder="Enter name"
        /> <br/>
        <input className='my-3'
          onChange={handleChange}
          type="number"
          value={data.phonenumber}
          name="phonenumber"
          placeholder="Phonenumber"
        />
      </form>
      <button  className='btn btn-success my-3'>Add Contact</button>
    </div>
  );
};

export default Create;
