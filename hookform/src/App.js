import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div>
      <Container className='p-5'>
 
      <form onSubmit={handleSubmit(onSubmit)}>
      <input  {...register("firstName")} /><br/>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> <br/>
      <input type="submit" />
    </form>
      </Container>
    </div>
  );
}

export default App;
