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
      href="https://docs.google.com/document/d/1CatUFA4iuZD9rMjbEbs73-u9Sq5pLbMIl9FwSAWodEw/edit?tab=t.0#heading=h.95p5ij59bwmv"
      target="_blank"
      rel="noopener noreferrer"
      className="cv-button"
    >
      View my CV
    </a>
    <p className="about-description">Logic and systems have always interested me, which probably explains my life-long interest in linguistics. Prior to entering Frontend, I was studying linguistics and Japanese at university, the latter for almost one year in Japan. I realized that not only does human language interest me, but so does coding languages as well, whereby I chose to enter Frontend!</p>
  </div>
</section>
  );
};

export default AboutMe;