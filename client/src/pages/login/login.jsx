import React, { useContext } from 'react';

import { UserContext } from '../../context/auth';
import { useForm } from '../../util/hooks';
import kill from "./kill.png"

import axios from 'axios'

export default function Login(props) {
  const context = useContext(UserContext);

  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: '',
    password: ''
  });

  function loginUser(){

    const userData ={
      email: values.email,
      password: values.password
    }

    axios.post('http://localhost:8080/api/auth/login', userData)
    .then(function(response){
      const userInfo = response.data
      context.login(userInfo);
      console.log(response, "hello loser")
      props.history.push('/');
    })
    .catch(err => {
      console.log(err);
  })

  }

  function loginUserCallback() {
    loginUser();
  }



    return (
    <div className="hero is-fullheight is-primary">
       <div className="hero-body">
    <div className="container has-text-centered">
      <div className="column is-8 is-offset-2">
      <h3 className="title has-text-white">Login</h3>
<hr className="login-hr"/>
<p className="subtitle has-text-white">Please login to see our cool stuff!</p>
<div className="box">
  <div className="box">
    <img src={kill} alt="logo"/>
  </div>
  <div className="title has-text-grey is-5">Please enter your email and password.</div>
  <form>
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

<button className="button is-block is-danger is-large is-fullwidth" onClick={onSubmit} >Login</button>
</div>


      </div>
    </div>
  </div>
     
    </div>
    )
}
