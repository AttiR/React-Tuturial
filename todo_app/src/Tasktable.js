import React from 'react'
import {Container, Button} from 'react-bootstrap'

const Tasktable = (props) => {
    return (
        <div>
        <Container>
        <table>
        <tbody>
        {
            props.todos.map((todo, index) => 
            <tr key={index}>
            <td>{todo.description}</td>
            <td>{todo.date}</td>
            <td><Button className='btn-danger' onClick={() => props.todoDelete(index)}> Delete </Button></td>
            </tr>)
         }
         </tbody>
      </table> 
      </Container>
        </div>
    )
}

export default Tasktable
