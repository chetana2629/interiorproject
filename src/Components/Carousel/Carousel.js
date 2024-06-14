import React from 'react';
import './Carousel.css'; 


const Carousel = () => {
  return (
    <section id="home">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="carousel2.jpg" className="d-block w-100" alt="Interior Design Image 1" />
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to Nakshtra</h2>
              <p>Adding aesthetics to life...!</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="couser3.jpg" className="d-block w-100" alt="Interior Design Image 2" />
          </div>
          <div className="carousel-item">
            <img src="couser4.jpg" className="d-block w-100" alt="Interior Design Image 3" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;
