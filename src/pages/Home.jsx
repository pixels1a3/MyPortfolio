import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import MySkills from '../components/MySkills';
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

        <div id="about">
            <AboutMe />
        </div>
        
        <div id="skills">
            <MySkills />
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