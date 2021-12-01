import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Tasktable from './Tasktable';

function App() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  function inputChange(event) {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  function addTodo() {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '' }); // to clear the input
  }

  const todoDelete = (row) =>
    setTodos(todos.filter((todo, index) => index !== row));
  return (
    <div>
      <Container>
        <h2 className="my-5 "> Task Track App </h2>
        <input
          style={{ width: '50%' }}
          className="form-control"
          placeholder="description"
          value={todo.description}
          name="description"
          onChange={inputChange}
        />{' '}
        <br />
        <input
          style={{ width: '50%' }}
          className="form-control"
          placeholder="date"
          value={todo.date}
          name="date"
          onChange={inputChange}
        />
        <Button onClick={addTodo} className="btn-success my-4">
          Create Task
        </Button>
        <Tasktable todos={todos} todoDelete = {todoDelete}/>
      
      </Container>
    </div>
  );
}

export default App;
