import React from 'react';
import Fade from 'react-reveal/Fade';
import Bottom from '../../assets/Bottom.jpg';
import './style.css';

function Quote() {
  return (
    <Fade bottom cascade>
    <section className="quote component" id = "quote">
        {/* <div className="quote-container mx-auto">
          <p className='quote-text'>“ What is a friend? A single soul dwelling in two bodies. ”
          <br></br>
            <span>- Aristotle</span>
          </p>
        </div> */}
        <blockquote className="callout quote EN quote-text">
        You are never alone. You are eternally connected with everyone.
        <cite className='author'> - Amit Ray</cite>
        </blockquote>
    </section>
    <footer>
        <div className='background-container'>

        </div>
    </footer>
    </Fade>
    
  );
}

export default Quote;