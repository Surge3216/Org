import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useForm } from '../../util/hooks';


export default function SignUp(props){
  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    username: '',
    email: '',
    password: ''
  });

  function registerUser(){
    console.log(values)
  axios.post('http://localhost:8080/api/auth/register', values)
  .then(function(response){
    props.history.push('/');
  }).catch(err => {
    console.log(err)
  })
  
}
  function registerUserCallback() {
    registerUser();
  }
  return(
  <Form onSubmit={onSubmit} noValidate>
  <Form.Field>
    <label>Username</label>
    <input label="Username"
         placeholder="Username.."
         name="username"
         type="text"
         value={values.username}
         onChange={onChange}/>
  </Form.Field>
  <Form.Field>
    <label>Email</label>
    <input label="Email"
         placeholder="Email.."
         name="email"
         type="text"
         value={values.email}
         onChange={onChange}/>
  </Form.Field>
  <Form.Field>
    <label>Password</label>
    <input label="Password"
          placeholder="Password.."
          name="password"
          type="password"
          value={values.password}
          onChange={onChange} />
  </Form.Field>
  <Button type='submit'>Submit</Button>
</Form>
  )
}
 


