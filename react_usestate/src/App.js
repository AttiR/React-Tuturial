import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

function App() {
  //const [feedback, setFeedback] = useState(4);  we pass anycomplex like febnoci as current state it will slow down the performance, 
  // We can pass as anonymouse function
  const [feedback, setFeedback] = useState( () => 4  );
  const [contact, setContact] = useState( () => 5 );
  // complex state lets say if we want to set object as currents state
  const[clicks, setClicks] = useState({left: '0', right: '0'})
  const left =clicks.left
  const right = clicks.right
  const handleLeftClicks = () => setClicks({...clicks, left: clicks.left +1 })
  const handleRightClicks = () => setClicks({...clicks, right: clicks.right +1 })

  return (
    <div>
      <Container>
        <Button className= 'my-3' onClick={() => setFeedback(feedback + 1)}>feedback</Button>{' '}
        <br />
        <span>
          <p>{feedback}, feedback recieved</p>
        </span>{' '}
        <br />
        <Button className= 'my-3' onClick={() => setContact(contact + 1)}>Contact</Button>
        <br />
        <span>
          <p> {contact}, contact request recieved</p>
        </span>
        <br />
        <Button onClick= {handleLeftClicks} > left </Button>
        <br />
        <span>
          <p> {left}, are left clicks</p>
        </span>
        <br />
        <Button onClick= {handleRightClicks} > Right </Button>
        <br />
        <span>
          <p> {right}, are right clicks</p>
        </span>
      </Container>
    </div>
  );
}

export default App;
