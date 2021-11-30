import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {
  //const [feedback, setFeedback] = useState(4);  we pass anycomplex like febnoci as current state it will slow down the performance,
  // We can pass as anonymouse function
  const [feedback, setFeedback] = useState(() => 4);
  const [contact, setContact] = useState(() => 5);
  // complex state lets say if we want to set object as currents state
  const [clicks, setClicks] = useState({ left: '0', right: '0' });
  const left = clicks.left;
  const right = clicks.right;
  const handleLeftClicks = () =>
    setClicks({ ...clicks, left: clicks.left + 1 });
  const handleRightClicks = () =>
    setClicks({ ...clicks, right: clicks.right + 1 });

  // Anecdotes

  const [selected, setSelected] = useState(() => 0);
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Button
              className="my-3 btn-success"
              onClick={() => setFeedback(feedback + 1)}
            >
              feedback
            </Button>
            <br />
            <span>{feedback}, feedback recieved.</span>
          </Col>
          <Col>
            <Button
              className="my-3 btn-warning"
              onClick={() => setContact(contact + 1)}
            >
              Contact
            </Button>
            <br />
            <span>{contact}, contact request recieved.</span>
          </Col>
          <Col>
            <Button
              className="my-3 btn-info"
              onClick={() => setSelected(selected + 1)}
            >
              
              Select next Anecdotes
            </Button>
            <br />
            <p> {anecdotes[selected]}, are right clicks</p>
          </Col>
        </Row>

        <Button onClick={handleLeftClicks}> left </Button>
        <br />
        <span>
          <p> {left}, are left clicks</p>
        </span>
        <br />
        <Button onClick={handleRightClicks}> Right </Button>
        <br />
        <span>
          <p> {right}, are right clicks</p>
        </span>
      </Container>
    </div>
  );
}

export default App;
