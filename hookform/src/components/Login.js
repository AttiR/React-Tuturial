import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };

  return (
    <div>
      <Form
        className="py-5"
        style={{ width: '50%' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* onSubmit even is actually data submitted by form*/}

        <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
        <h2>Log in Form</h2>
        <Form.Group className="mb-3" controlId="formBasictext">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter User name"
            {...register('username', {
              required: 'username is required',
              maxLength: {
                value: 8,
                message: 'username should not exceed limit of 8',
              },
            })} // bind the input values to register
          />
          <small style={{ color: 'red' }}>{errors.username?.message}</small>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register('email', { required: 'Email is required' })} // bind the input values to register
          />
          <small style={{ color: 'red' }}>{errors.email?.message}</small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'password is required',
              maxLength: {
                value: 15,
                message: 'Password should not exceed 15 characters ', 
              }, minLength:{value:7, message:'password should not less than 7'}
            })} // bind the input values to register
          />
          <small style={{ color: 'red' }}>{errors.password?.message}</small>
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
