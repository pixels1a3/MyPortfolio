import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <section id="contact" className="py-5 bg-light text-center">
      <div className="container max-w-800px">
        <h2 className="display-4 mb-4 text-secondary">Contact Me</h2>
        <p className="lead mb-4">
          I'm always open to new opportunities and collaborations. <br />Feel free to contact me at any time!
        </p>
        <div className="d-flex flex-column align-items-center gap-3">
          <a
            href="mailto:tiamsaramolki11@gmail.com"
            className="d-flex align-items-center text-decoration-none text-dark fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="me-2" />
            tiamsaramolki11@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/tiam-svensson-saramolki-4a7b63223/"
            className="d-flex align-items-center text-decoration-none text-dark fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="me-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/pixels1a3/"
            className="d-flex align-items-center text-decoration-none text-dark fs-5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="me-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;