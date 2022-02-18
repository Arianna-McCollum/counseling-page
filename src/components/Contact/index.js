import './style.css';
import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section id="contact" className="site-section section-form text-center mx-auto">
    <div class="container">
        <h2 className="contact-title">Connect with Me</h2>
      <form id="contact-form"onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-sm-6">
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="form-control" placeholder="Name" />
        </div>
        <div className="col-sm-6">
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} className="form-control" placeholder="Email" />
        </div>
        <div className="col-sm-12">
          <textarea name="message" defaultValue={message} onBlur={handleChange} className="form-control" placeholder="Message" />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        </div>
        <button className="contact-btn" type="submit">Submit</button>
      </form>
    </div>
    </section>
  );
}

export default Contact;