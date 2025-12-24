import React from 'react';
import styles from '../styles/Project.module.css';

// Helper function to parse tech string into array of technologies
const parseTech = (techString) => {
  if (!techString) return [];
  // Remove the prefix like "Technologies/Libraries Utilized: " or similar
  const cleaned = techString.replace(/Technologies\/Libraries(\s+Utilized)?:\s*/i, '')
                           .replace(/Technologies\/Libraries\/Skills\s+Utilized:\s*/i, '');
  // Split by comma and clean up each item
  return cleaned.split(',').map(t => t.trim()).filter(t => t.length > 0);
};

const Project = ({ title, image, description, tech, link, link2, link3, width }) => {
  const techList = parseTech(tech);
  
  return (
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
      <div className={styles.techContainer}>
        <span className={styles.techLabel}>Tech Stack</span>
        <div className={styles.techList}>
          {techList.map((t, index) => (
            <span key={index} className={styles.techBadge}>{t}</span>
          ))}
        </div>
      </div>
      <div className={styles.linksContainer}>
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
        {link3 && (
          <a
            className={styles.link}
            href={link3}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;


