import React from 'react';
import '../styles/Hero.css';

const Hero = () => (
  <section id="hero">
    <h1>Hello, I'm [Your Name]</h1>
    <p>Software Engineer | Web Developer</p>
    <button onClick={() => document.getElementById('contact').scrollIntoView()}>Contact Me</button>
  </section>
);

export default Hero;
