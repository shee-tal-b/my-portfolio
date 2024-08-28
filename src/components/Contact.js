import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactForm() {
  const [state, handleSubmit] = useForm("mpwabljq");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        window.location.reload(); // Reloads the form after the message disappears
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      {showMessage ? (
        <p className="success-message">Thank you for your message! It will disappear in 30 seconds.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      )}
    </>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2> 
      <ContactForm />
      <br/>
      <br/>
      <br/>
      <div className="social-links">
        <a href="https://github.com/shee-tal-b?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/sheetal-b-307473250/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
        
      </div>
    </section>
  );
}

export default Contact;
