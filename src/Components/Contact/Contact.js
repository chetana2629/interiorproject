import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center text-dark">Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" className="form-control" rows="5" required></textarea>
        </div>
        <button type="submit" className="btn btn-teal">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
