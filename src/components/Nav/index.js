import React from "react";
import Logo from '../../assets/Lotux.png'
import './style.css';

function Nav() {
    return (
        
  <header class="hero-header" id="hero-header">
      <div class="wrapper">
     </div>
     <div className="mr-auto">
     <img className="logo" src={Logo}/>
     </div>
     <nav>
          <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#footer">Contact Me</a></li>
          </ul>
      </nav>
  </header>
    )
    }
    export default Nav;