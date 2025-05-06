import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="name">Tiam Svensson Saramolki</p>
          <p className="description">
            Frontend Developer
            <br />
            Uppsala, Sweden
          </p>
        </div>
        <div className="hero-image">
          <img src="profile_pic.jpg" alt="Tiam" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;