import React from 'react';
import './Projects.css';

const projects = [
  {
    name: "Country Statistics Site",
    description: "A site summarizing interesting statistics of the world's countries using API calls.",
    image: "/images/country-stats.png",
    link: "https://placeholder.com"
  },
  {
    name: "Weather App",
    description: "Real-time and real-location weather forecasts, created with HTML, CSS and JavaScript, using Open-Meteo API.",
    image: "/images/weather-app.png",
    link: "https://placeholder.com"
  },
  {
    name: "Quiz",
    description: "A site built with JavaScript loading questions from JSON with AJAX.",
    image: "/images/quiz-app.png",
    link: "https://allmantquiz.netlify.app/"
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio showcasing my skills and projects, created with React.",
    image: "/images/portfolio-site.png",
    link: "https://tiam.netlify.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="project-box">
            <img src={project.image} alt={project.name} className="project-image" />
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;