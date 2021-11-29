import React from 'react';
import { Container } from 'react-bootstrap';

const Hello = (props) =>{
  return(
    <div>
      <p> Hello {props.name}, has job {props.job} </p>

    </div>
  );
}

function App() {
  const now = new Date();
  const a=10;
  const b=15;
  return (
    <Container>
      <div>
      <h1>Hello React</h1>
      <p>The Current time is, {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name=' Atti' job='Engineer'/>
      <Hello name='Ahmad' job='Developer'/>
      </div>
    </Container>
  );
}

export default App;
