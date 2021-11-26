import React from 'react';
import './App.css';

function App() {
  /** The return statement of React component can only return one element.
   * In the real life, you will often have multiple elements and then you have to wrap these inside one element like div.
   * We can also use  <React.Fragment> */
  /** for inline style we use camel casing like  */
  return (
    /*<div style={{fontSize: '10px'}}> 
      <h1> Hello React</h1>
      <p>we are learning React</p>
      <button>Press Me</button>
    </div> The better idea is to use classes for style*/

    <div className="App">
      <h1>Hello React</h1>
      <p> We are learning React </p>
      <button>Press ME</button>
    </div>
  );
}

export default App;
