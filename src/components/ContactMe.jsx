import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          I'm always open to new opportunities and collaborations. <br/>Feel free to contact me at any time!
        </p>
        <div className="contact-links">
          <a
            href="mailto:tiamsaramolki11@gmail.com"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="contact-icon" />
            <span>tiamsaramolki11@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tiam-svensson-saramolki-4a7b63223/"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/pixels1a3"
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;