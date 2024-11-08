import React from 'react';
import './Projects.css'; 

const projectList = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. It showcases [key features/technologies used].',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. It highlights [key features/technologies used].',
    link: 'https://yourprojectliveurl.com',
  },
  {
    title: 'Project Three',
    description: 'An overview of Project Three, including [key features/technologies].',
    link: 'https://github.com/yourusername/project-three',
  },
  {
    title: 'Project Four',
    description: 'An overview of Project Four, including [key features/technologies].',
    link: 'https://github.com/yourusername/project-four',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
