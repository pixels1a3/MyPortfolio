import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
<section id="about" className="about-section">
  <div className="about-content">
    <h2 className="about-title">About Me</h2>
    <p className="about-description">Hello! My name is Tiam and I am studying Frontend at Jensen yrkeshögskola. I am seeking internship/LIA from 2025/11/24.</p>
    <p className="about-description">I love learning new things and am currently mastering the following:</p>
    <div className="skills-container">
      <div className="skills-grid">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Git</li>
          <li>Github</li>
          <li>Figma</li>
          <li>Miro</li>
          <li>NPM</li>
        </ul>
      </div>
    </div>
    <a
      href="https://drive.google.com/my-link"
      target="_blank"
      rel="noopener noreferrer"
      className="cv-button"
    >
      Download CV
    </a>
  </div>
</section>
  );
};

export default AboutMe;