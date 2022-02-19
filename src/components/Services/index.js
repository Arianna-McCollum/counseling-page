import React from 'react';
import Fade from 'react-reveal/Fade';
import './style.css';
function Services() {
  
  return (
    <Fade bottom cascade>
    <section id="services" className="site-section section-services overlay text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="do-title">What I Do..</h3>
                    <p className='service-text'>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </section>
    </Fade>
  );
}

export default Services;
