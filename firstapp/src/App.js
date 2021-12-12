import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Hello from './components/Hello';
import Header from './components/Header';
import Total from './components/Total';

function App() {
  const [feedback, setFeedback] = useState(0);
  const [contact, setContact] = useState(0);
  const[counter, setCounter]=useState(0);

  const now = new Date();
  const a = 10;
  const b = 15;
  const name = 'Haseeb';
  // defining a ojbject consists of an array of parts
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  function Part(props) {
    return (
      <p>
        The pasrt is : {props.part} and number of exercise are: {props.exercise}
      </p>
    );
  }
  function Content() {
    return (
      <div>
        <Part
          part={course.parts[0].name}
          exercise={course.parts[0].exercises}
        />
        <Part
          part={course.parts[1].name}
          exercise={course.parts[1].exercises}
        />
        <Part
          part={course.parts[2].name}
          exercise={course.parts[2].exercises}
        />
      </div>
    );
  }

  // props values can be hardcorded or inside {}
  return (
    <Container>
      <div>
        <h1>Hello React</h1>

        <p> {feedback} times Feedback give.</p>
        <br />
        <Button onClick={() => setFeedback(feedback + 1)}>Give Feedback</Button>

        <p> {contact} Contact request arrived.</p>
        <br />
        <Button onClick={() => setContact(contact + 1)}>Contact Request</Button>

        <p>The Current time is, {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
        <Hello name={name} job="Engineer" />
        <Header course={course.name} />
        {/*
        <Content part = {part1} exercises={exercises1}/>
        <Content part = {part2} exercises={exercises2}/>
        <Content part = {part3} exercises={exercises3}/>*/}
        <Content />
        <Total
          exercises={
            course.parts[0].exercises +
            course.parts[1].exercises +
            course.parts[2].exercises
          }
        />
      </div>
      <Button onClick={()=> setCounter(counter+1)}>Click  Counter</Button>
      <p> counter pressed for {counter} times</p>
      <Hello age='13' name='Atti' job='Engineering'/>
    </Container>
  );
}

export default App;
