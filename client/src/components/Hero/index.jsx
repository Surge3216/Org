import React, { Component } from "react";
import { Link } from "react-router-dom";
import kill from "./kill.png"
import "./style.css";



function Navbar() {
    
        return(
            <div>
<section class="hero is-small">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src={kill} alt="Logo"/>
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <Link
            to="/login"
             className = {window.location.pathname === "/login" ?
             "nav-link active" : "nav-link", "navbar-item" }>
              Login
            </Link>
            <Link
            to="register"
            className={window.location.pathname === "/register" ?
            "nav-link active" : "nav-link", "navbar-item" }>
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title black">
        Title
      </p>
      <p class="subtitle">
        Subtitle
      </p>
    </div>
  </div>

  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li class="">
            <Link
              to="/"
              className = {window.location.pathname === "/" ||
              window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>Home
            </Link>
          </li>
          <li>
            <Link
            to="/confessionals"
            className = {
            window.location.pathname === "/confessionals"
            ? "nav-link active"
            : "nav-link"
            }>Confessional's</Link>
          </li>
          <li>
            <Link
            to="/challenges"
            className = {window.location.pathname === "/challenges" ? "nav-link active" : "nav-link"}>
            Challenge's
            </Link>
          </li>
          <li>
            <Link
              to="/rounds"
              className = {window.location.pathname === "/rounds" ? "nav-link is-active" : "nav-link is-active"}>
              Rounds
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</section>

            </div>
        )
    
};

export default Navbar