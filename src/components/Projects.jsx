import React from 'react';

const projects = [
  {
    name: "Country Statistics Site",
    description: "A site summarizing interesting statistics of the world's countries using API calls.",
    image: "/images/country-stats.png",
    link: "https://countrystatistics.netlify.app/"
  },
  {
    name: "Weather App",
    description: "Real-time and real-location weather forecasts, created with HTML, CSS and JavaScript, using Open-Meteo API.",
    image: "/images/weather-app.png",
    link: "https://tiamweatherapp.netlify.app/"
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
    <section id="projects" className="py-5 text-center">
      <div className="container">
        <h2 className="display-4 mb-5 text-secondary">My Projects</h2>
        <div className="row justify-content-center g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card h-100 text-decoration-none text-dark shadow-sm hover-shadow"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="card-img-top"
                  style={{ height: '160px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h3 className="card-title fs-5">{project.name}</h3>
                  <p className="card-text fs-6">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;