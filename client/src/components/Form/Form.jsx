import React, { useContext } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios'


import { UserContext } from '../../context/auth';
import { useForm } from '../../util/hooks';

function Register(props) {
  const context = useContext(UserContext);

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
  });

  function addUser(){
    const userData ={
      username: values.username,
      email: values.email,
      password: values.password
    }

    console.log(userData)

    axios.post('http://localhost:8080/api/auth/register', userData)
    .then(function(response){
      const userLog = {
        email: response.data.email,
        password: userData.password
      }
      axios.post('http://localhost:8080/api/auth/login', userLog)
      .then(function(response){
        const userInfo = response.data
        console.log(userInfo)
        context.login(userInfo);
        props.history.push('/');
      })
      .catch(err => {
        console.log(err);
    })
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
      <Form onSubmit={onSubmit} noValidate>
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
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;