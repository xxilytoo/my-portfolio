import React from "react";
import styles from "../styles/Skills.module.css";
import javaimg from '../images/java.svg';
import cpp from '../images/c++.svg';
import git from '../images/git.svg';
import js from '../images/javascript.svg';
import py from '../images/python.svg';
import mongo from '../images/mongodb-icon.svg';
import rt from '../images/react-svgrepo-com.svg';
import aws from '../images/aws-svgrepo-com.svg';
import golang from '../images/golang-icon.svg';

const skillsData = [
  { name: "JavaScript", image: js },
  { name: "React", image: rt },
  { name: "Python", image: py },
  { name: "C++", image: cpp },
  { name: "Golang", image:  golang},
  { name: "Git", image: git },
  { name: "AWS", image: aws },
  { name: "Java", image: javaimg },
  { name: "MongoDB", image: mongo },
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img
              src={skill.image}
              alt={`${skill.name} icon`}
              className={styles.skillImage}
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
