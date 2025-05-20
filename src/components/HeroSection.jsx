import React from 'react';

const HeroSection = () => {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center bg-light p-4" id="hero">
      <div className="container-sm text-center">
        <div className="row justify-content-center align-items-center gx-3 gy-4">
          <div className="col-12 col-md-5 mb-3 mb-md-0 order-md-1 order-2">
            <h1 className="display-3 mb-3">Tiam Svensson Saramolki</h1>
            <p className="lead fs-3 text-muted mb-4">
              Frontend Developer
              <br />
              Uppsala, Sweden
            </p>
          </div>
          <div className="col-12 col-md-5 d-flex justify-content-center order-md-2 order-1">
            <img
              src="profile_pic.jpg"
              alt="John"
              className="rounded-circle border border-4 border-white shadow-lg img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;