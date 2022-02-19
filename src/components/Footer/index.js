import React from 'react';
import './style.css';
import Bottom from '../../assets/Bottom.jpg';

function Footer() {
  return (
    <footer>
        <div className='background-container'>
            <img className='footer-img' src={Bottom}></img>
        </div>
    </footer>
    
  );
}

export default Footer;