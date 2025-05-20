import React from 'react';

const AboutMe = () => {
  return (
    <section className="py-5" id="about">
      <div className="container text-center text-md-start">
        <h2 className="display-4 mb-4 text-secondary text-center">About Me</h2>
        <p className="lead mb-4">
          Hello! My name is Tiam and I am studying Frontend at Jensen yrkeshögskola. I am seeking internship/LIA from 2025/11/24. I love learning new things and am currently mastering the following:
        </p>
        <div className="d-flex justify-content-center mb-4">
          <div className="w-55">
            <ul className="row list-unstyled">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Git",
                "Github",
                "Figma",
                "Miro",
                "NPM"
              ].map((skill, index) => (
                <li key={index} className="col-4 mb-2 text-center fw-bold fs-5">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="lead mb-4">
          Logic and systems have always interested me, which probably explains my life-long interest in linguistics. Prior to entering Frontend, I was studying linguistics and Japanese at university, the latter for almost one year in Japan. I realized that not only does human language interest me, but so does coding languages as well, whereby I chose to enter Frontend!
        </p>
        <div className="d-flex justify-content-center">
          <a
            href="https://docs.google.com/document/d/1CatUFA4iuZD9rMjbEbs73-u9Sq5pLbMIl9FwSAWodEw/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-lg fw-bold"
          >
            View my CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;