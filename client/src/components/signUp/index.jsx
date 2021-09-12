import React from 'react';
import kill from "./kill.png";
import axios from 'axios';

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

    axios.post('/api/auth/register', userData)
    .then(function(response){
      console.log(response)
    })
    .catch(err => {
      console.log(err);
  })
  window.location.href = "/login";
  }

  function registerUser() {
    addUser();
  }

  return (
    <div>
      <div className="hero is-fullheight is-dark">
       <div className="hero-body">
    <div className="container has-text-centered">
      <div className="column is-8 is-offset-2">
      <h3 className="title has-text-white">Register</h3>
<hr className="login-hr"/>
<p className="subtitle has-text-white">Register to get in the Viewer Lounge</p>
<div className="box">
  <div className="box">
    <img src={kill} alt="logo"/>
  </div>
  <div className="title has-text-grey is-5">Please enter your name, email and password.</div>
  <form>
  <div className="field">
    <div className="control">
      <input className="input is-large" 
      label="Username"
      placeholder="Name.."
      name="username"
      type="text"
      value={values.username}
      onChange={onChange}/>
    </div>
  </div>
  <div className="field">
    <div className="control">
      <input className="input is-large" autofocus=""
      label="Email"
      placeholder="Email.."
      name="email"
      type="email"
      value={values.email}
      onChange={onChange}/>
    </div>
  </div>
  <div className="field">
    <div className="control">
      <input className="input is-large" 
      label="Password"
      placeholder="Password.."
      name="password"
      type="password"
      value={values.password}
      onChange={onChange}/>
    </div>
  </div>
</form>

<button className="button is-block is-dark is-large is-fullwidth" onClick={onSubmit} >Register</button>
</div>
</div>
</div>
</div>
      </div>
        
    </div>
  );
}

export default Register;