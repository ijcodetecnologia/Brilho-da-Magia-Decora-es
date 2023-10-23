import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.SessaoImgs}>
      <div className={styles.SessaoImgsCaixa}>
        <img src={project.image} alt={project.name} />
      </div>
    </div>
  );
};

export default ProjectCard;
