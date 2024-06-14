import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="container py-5">
      <h2 className="text-center text-dark">Our Portfolio</h2>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="portfolio1.jpg" alt="Portfolio Item 1" />
        </div>
        <div className="portfolio-item">
          <img src="portfolio2.jpg" alt="Portfolio Item 2" />
        </div>
        <div className="portfolio-item">
          <img src="portfolio3.jpg" alt="Portfolio Item 3" />
        </div>
        <div className="portfolio-item">
          <img src="portfolio4.jpg" alt="Portfolio Item 4" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
