import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useForm } from '../../util/hooks';

function Register(props) {

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
  });

  function addUser(){
    const userData ={
      username: values.username,
      email: values.email,
      password: values.password,
    }

    axios.post('http://localhost:8080/api/auth/register', userData)
    .then(function(response){
      console.log(response)
    })
    .catch(err => {
      console.log(err);
  })

  }

  function registerUser() {
    addUser();
  }

  return (
    <div className="form-container">
      <Form  noValidate>
        <h1>Register</h1>
        <Form.Input
          label="Username"
          placeholder="Username.."
          name="username"
          type="text"
          value={values.username}
          onChange={onChange}
        />
        <Form.Input
          label="Email"
          placeholder="Email.."
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
        />
        <Form.Input
          label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          value={values.password}
          onChange={onChange}
        />
        <Link
        to="/login"
        className = {
         window.location.pathname === "/login"
         ? "nav-link active"
         : "nav-link"
         }>
        <Button type="submit" onClick={onSubmit} primary>
          Register
        </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Register;