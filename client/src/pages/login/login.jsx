import { Button, Form } from 'semantic-ui-react';

import { useForm } from '../../util/hooks';

import axios from 'axios'

export default function Login(props) {
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: ''
  });

  function loginUser(){

    const userData ={
      email: values.email,
      password: values.password
    }

    console.log(userData)

    axios.post('http://localhost:8080/api/auth/login', userData)
    .then(function(response){
      
      console.log(response)
  
    })
    .catch(err => {
      console.log(err);
  })

  }

  function loginUserCallback() {
    loginUser();
  }



    return (
      <div className="form-container">
      <Form onSubmit={onSubmit} noValidate >
          <Form.Input
         label="Email"
         placeholder="Email.."
         name="email"
         type="text"
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
          Login
        </Button>
  </Form>
  </div>
    )
}
