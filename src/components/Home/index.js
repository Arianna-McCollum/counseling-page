import React from 'react';
import Fade from 'react-reveal/Fade';
import './style.css'
function Home() {
  
  return (
    <section className="hero" id="home">
      <Fade bottom cascade>
              <div className="hero-cta d-flex mx-auto" id="hero-cta">
            <h1>Hold the Soul
              <br></br><span className='hero-span'>Spiritual Counseling</span>
              </h1>
          </div>
          <div id="section04" class="demo">
                <a href="#about"><span></span></a>
          </div>
      </Fade>
    </section>
  );
}

export default Home;