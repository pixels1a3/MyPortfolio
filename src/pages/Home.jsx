import React from 'react';
import HeroSection from '../components/HeroSection';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../App.css';

const Home = () => {
  return (
    <div>
      
      <Navbar />
      
      <div className="content-below-navbar">
        <div id="hero">
            <HeroSection />
        </div>
        
        <div id="projects">
            <Projects />
        </div>

        <div id="about">
            <AboutMe />
        </div>
        
        <div id="contact">
            <ContactMe />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Home;