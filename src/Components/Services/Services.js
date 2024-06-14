import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="container py-5">
      <h2 className="text-center text-dark">Our Services</h2>
      <div className="services d-flex justify-content-between">
        <div className="service-box residential">
          <h3>Residential</h3>
        </div>
        <div className="service-box commercial">
          <h3>Commercial</h3>
        </div>
        <div className="service-box space">
          <h3>Space Planning</h3>
        </div>
        <div className="service-box electrical">
          <h3>Electrical</h3>
        </div>
        <div className="service-box modular">
          <h3>Modular</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
