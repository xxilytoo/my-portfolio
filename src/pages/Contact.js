import React from 'react';
import '../styles/Contact.css'; 

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-header">
          <h1 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about tech.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <div className="contact-info-text">
                <h3>Email</h3>
                <a href="mailto:contactkenhao@gmail.com">contactkenhao@gmail.com</a>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">💼</div>
              <div className="contact-info-text">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/1cken/" target="_blank" rel="noopener noreferrer">linkedin.com/in/1cken</a>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">🐙</div>
              <div className="contact-info-text">
                <h3>GitHub</h3>
                <a href="https://github.com/xxilytoo" target="_blank" rel="noopener noreferrer">github.com/xxilytoo</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" action="https://formspree.io/f/xwkdvpqw" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="contact-submit">
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
