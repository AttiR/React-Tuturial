import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate =useNavigate();
  const {user, logOut} = useUserAuth();
  const handleLogout= async ()=>{
    try {
      await logOut();
      navigate('/login')
    

    }catch(err){
      console.log(err.message)

    }
  }
  return (
    <div>
      <Container className='py-5'>
        <h2> React + Firebase Authentication </h2>
        <p>
          Authentication App to create new users, login and logout
          functionality. <br/>We will see how to use Context Api to management Auth
          state in the application.{' '}
        </p>
        <p>Hello, Welcome {user && user.email}</p><br/>
        <Button variant='danger' onClick={handleLogout}>Logout</Button>
      </Container>
    </div>
  );
};

export default Home;
