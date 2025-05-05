import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Tiam Svensson Saramolki</h1>
          <p className="occupation">Frontend Developer</p>
          <p className="description">Uppsala, Sweden</p>
        </div>
        <div className="hero-image">
          <img src="profile_pic.jpg" alt="Your Name - Profile Picture" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;