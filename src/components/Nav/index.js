import React from "react";
import Logo from '../../assets/Lotus-icon.png'
import './style.css';

function Nav() {
    return (
        
  <header class="hero-header" id="hero-header">
      <div class="wrapper">
     </div>
     <div className="d-flex mr-auto">
     <img className="logo" src={Logo}/>
     <h1 className="title">Hold the Soul</h1>
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