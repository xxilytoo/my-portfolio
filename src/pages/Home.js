import React from 'react';
import Typical from 'react-typical';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>
          <Typical
            steps={[
              'Hi, I\'m', 1500,   
              'Hi, I\'m Shawn Chin!', 3000,   
              '', 1000   
            ]}
            loop={Infinity}
            wrapper="span"
          />
        </h1>
        <p>Welcome to my portfolio.</p>
      </div>
        {/* About Me Section */}
        <section id="about-me" className="about-me-section">
        <h2>About Me</h2>
        <p>
          Hi, I'm Shawn, a dedicated software developer with a strong focus on infrastructure automation, software development, and artificial intelligence. I have a proven track record of optimizing processes, enhancing system performance, and developing full-stack applications that are both user-centric and efficient. With experience in languages like Python, JavaScript, Java, and C++, I enjoy tackling complex technical challenges and contributing to innovative projects that merge the power of AI with robust software architecture. Whether it's streamlining CI/CD pipelines, automating large-scale data collection, or crafting intelligent solutions, I'm passionate about creating impactful and reliable tech solutions.
        </p>
      </section>
      <button onClick={() => window.location.href = "/Contact"}> Contact Me </button>
    </section>
    
  );
};

export default Home;

