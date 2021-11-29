import React from 'react';
import { Container } from 'react-bootstrap';
import Hello from './components/Hello';
import Header from './components/Header';
import Total from './components/Total';



function App() {
  const now = new Date();
  const a = 10;
  const b = 15;
  const name = 'Haseeb';
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  function Part(props){
    return(
     <p>The pasrt is : {props.part} and number of exercise are: {props.exercise}</p>
    )
  }
  function Content(){
    return(
        <div>
       <Part part={part1} exercise={exercises1}/>
       <Part part={part2} exercise={exercises2}/>
       <Part part={part3} exercise={exercises3}/>
       </div>
    )
  }
 
  // props values can be hardcorded or inside {}
  return (
    <Container>
      <div>
        <h1>Hello React</h1>
        <p>The Current time is, {now.toString()}</p>
        <p>
          {a} plus {b} is {a + b}
        </p>
        <Hello name={name} job="Engineer" />
        <Header course = {course}/>
       {/*
        <Content part = {part1} exercises={exercises1}/>
        <Content part = {part2} exercises={exercises2}/>
        <Content part = {part3} exercises={exercises3}/>*/}
        <Content/>
        <Total exercises={exercises1 + exercises2 +exercises3}/>
      

      </div>
    </Container>
  );
}

export default App;
