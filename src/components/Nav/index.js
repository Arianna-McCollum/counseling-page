import React from "react";
import Logo from '../../assets/Lotux.png';
import './style.css';

function Nav() {
    return (
        
  <header class="hero-header" id="hero-header">
      <div class="wrapper">
     </div>
     <div className="d-flex mr-auto">
     <img className="logo" src={Logo}/>
     <h2 className="mr-auto nav-title"><em>Hold the Soul</em></h2>
     </div>
     
     <nav>
          <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Me</a></li>
          </ul>
      </nav>
  </header>
    )
    }
    export default Nav;