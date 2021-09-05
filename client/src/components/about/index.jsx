import React, { Component } from "react";
import photo from "./place.png";
import "./style.css"


export class About extends Component{
    render(){
        return(
<div>
<div class="columns bio">
  <div className="column is-4 ">
      <div class="aboutMe ">
        <h2 class="title">Conner</h2>
        <img src={photo} />
      </div>
    
      <div class="has-text-left aboutMe">
        <p class="title">About Me</p>
        <h6 ClassName=""><strong>Home</strong></h6>
        <p>Salt Lake City, UT</p>
        <br></br>
        <h6 ClassName=""><strong>Age</strong></h6>
        <p>26</p>
        <br></br>
        <h6 ClassName=""><strong>Claim to fame?</strong></h6>
        <p>My daughter, putting myself through law school while working full-time, and winning $1.2 million in my first trial with no court experience.</p>
        <br></br>
        <h6 ClassName=""><strong>Why do you think you'll win?</strong></h6>
        <p>I like to win and always do! Plus, I’m lucky and can finagle my way out of situations.
          Do You Consider Yourself a Brain, a Beauty or a Brawn? We all know I'm not here because
          of how I look in a bikini. I have a tendency to think I'm smarter than a lot of people, 
          but don't we all? I guess not or you wouldn't be asking the question. There you have it 
          - those are the analytical skills that prove I must be a Brain!</p>
        <br></br>
      </div>

      </div>
  <div class="column ">
    <div class=" has-text-left">
    <div class="aboutMe  is-child box">
      <p class="title top">Night One</p>
      <p>I like to win and always do! Plus, I’m lucky and can finagle my way out of situations.
          Do You Consider Yourself a Brain, a Beauty or a Brawn? We all know I'm not here because
          of how I look in a bikini. I have a tendency to think I'm smarter than a lot of people, 
          but don't we all? I guess not or you wouldn't be asking the question. There you have it 
          - those are the analytical skills that prove I must be a Brain!</p>
    </div>

    <div class="aboutMe is-child box">
      <p class="title top">Night One</p>
      <p>I like to win and always do! Plus, I’m lucky and can finagle my way out of situations.
          Do You Consider Yourself a Brain, a Beauty or a Brawn? We all know I'm not here because
          of how I look in a bikini. I have a tendency to think I'm smarter than a lot of people, 
          but don't we all? I guess not or you wouldn't be asking the question. There you have it 
          - those are the analytical skills that prove I must be a Brain!</p>
    </div>

    <div class=" is-child box">
      <p class="title top">Night One</p>
      <p>I like to win and always do! Plus, I’m lucky and can finagle my way out of situations.
          Do You Consider Yourself a Brain, I like to win and always do! Plus, I’m lucky and can finagle my way out of situations.
          Do You Consider Yourself a Brain, a Beauty or a Brawn? We all know I'm not here because
          of how I look in a bikini. I have a tendency to think I'm smarter than a lot of people, 
          but don't we all? I guess not or you wouldn't be asking the question. There you have it 
          - those are the analytical skills that prove I must be a Brain!</p>
    </div>

    <div class=" is-child box">
      <p class="title top">Night One</p>
      <p>I like to win and always do! Plus, I’m lucky and can finagle my way out of situations.
          Do You Consider Yourself a Brain, I like to win and always do! Plus, I’m lucky and can finagle my way out of situations.
          Do You Consider Yourself a Brain, a Beauty or a Brawn? We all know I'm not here because
          of how I look in a bikini. I have a tendency to think I'm smarter than a lot of people, 
          but don't we all? I guess not or you wouldn't be asking the question. There you have it 
          - those are the analytical skills that prove I must be a Brain!</p>
    </div>


    <nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 2">2</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 3">3</a>
    </li>
  </ul>
</nav>


    
    </div>
  </div>
  
  </div>
</div>
        )
    }
};

export default About