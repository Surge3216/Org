import React, {  useContext } from "react";
import { UserContext } from '../../context/auth';
import { Link } from "react-router-dom";
import kill from "./kill.png"
import "./style.css";



function Navbar() {
  const { user, logout } = useContext(UserContext)
  console.log(window.location.pathname)

        return(
            <div>
<section className="hero is-small">
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span className="navbar-burger" data-target="navbarMenuHeroB">
            <span><Link
           to="/login"
           className = "black"
           name="logout" onClick={logout} >
              Logout
            </Link></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
          <Link
           to="/login"
           className = "black"
           name="logout" onClick={logout} >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container has-text-centered">
      <p className="title black">
      <img src={kill} alt="Logo"/>
      </p>
    </div>
  </div>

  <div className="hero-foot">
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul>
        {user.role === "viewer" && <li>
         <Link
              to="/"              
              >Viewer Lounge
            </Link>
          </li>}

          {user.role === "player" && <li >
            <Link
              to="/"
              >Confessional
            </Link>
          </li>}
          
          
          {user.role === "viewer" && <li>
           <Link
            to="/players"
            >
            Players
          </Link>         
          </li>}
          <li>
          <Link
            to="/challenges"
            >
            Challenge's
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