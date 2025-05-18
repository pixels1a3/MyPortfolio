import React from 'react';
import './Footer.css';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p className="footer-text">© 2025 Tiam Svensson Saramolki</p>
         <p className="footer-created">Portfolio created with React.</p>
        <div className="footer-links">
          <a
            href="mailto:tiamsaramolki11@gmail.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="footer-icon" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/tiam-svensson-saramolki-4a7b63223/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icon" />
            LinkedIn
          </a>
          <a
            href="https://github.com/pixels1a3"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;