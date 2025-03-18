import React from 'react';
import '../styles/Contact.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './ContactForm';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="contact">
      <h1 className="section-title">Contact Me</h1>

      <div className="contact-container">
        <div className="contact-left">
          <div className="get-in-touch">
            <h2>Get In Touch</h2>
            <a
              href="https://github.com/Theo-Stefan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/theodoros-stefanidis-477276245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            </a>
          </div>

          <div className="my-email">
            <h2>My email</h2>
            <div className="contact-email">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <p>t.stefanidis24@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="line-between"></div>

        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
