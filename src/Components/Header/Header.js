import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-dark text-white fixed-top shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <div className="logo">
          <a href="#home">
            <img src="logo.jpeg" alt="Nakshtra Logo" className="logo-img" style={{ height: '50px' }} />
          </a>
        </div>
        <nav aria-label="Main Navigation">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link text-teal" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link text-teal" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-teal" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link text-teal" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link text-teal" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
