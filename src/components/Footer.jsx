import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light pt-4 pb-2 mt-5 border-top">
      <div className="container text-center">
        <p className="mb-2 text-secondary">© 2025 Tiam Svensson Saramolki</p>
        <p className="mb-3 fs-6 text-muted">Portfolio created with React.</p>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="mailto:tiamsaramolki11@gmail.com"
            className="d-flex align-items-center text-decoration-none text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="me-2 fs-4" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/tiam-svensson-saramolki-4a7b63223/"
            className="d-flex align-items-center text-decoration-none text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="me-2 fs-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/pixels1a3/"
            className="d-flex align-items-center text-decoration-none text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="me-2 fs-4" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;