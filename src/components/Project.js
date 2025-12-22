import React from 'react';
import styles from '../styles/Project.module.css';

const Project = ({ title, image, description, tech, link, link2, width }) => (
  <div
    className={styles.project}
    style={width ? { width } : {}}
  >
    <h3 className={styles.title}>{title}</h3>
    <img
      className={styles.image}
      src={image}
      alt={`${title} project preview`}
    />
    <p className={styles.description}>{description}</p>
    <p className={styles.tech}>{tech}</p>
    <a
      className={styles.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
    {link2 && (
      <a
        className={styles.link}
        href={link2}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code/Download
      </a>
    )}
  </div>
);

export default Project;


