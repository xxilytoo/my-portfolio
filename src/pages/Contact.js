import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to reach out, feel free to fill out the form below or email me at <a href="mailto:contactkenhao@gmail.com">contactkenhao@gmail.com</a></p>
      <form action="https://formspree.io/f/xwkdvpqw" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="button-container">
          <button type="submit">Send Message</button>
        </div>
        
      </form>
    </section>
  );
};

export default Contact;
