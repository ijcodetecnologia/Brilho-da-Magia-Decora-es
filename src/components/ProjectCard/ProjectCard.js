import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.SessaoImgs}>
      <h2>{project.name}</h2>
      <div className={styles.imgContainer}>
        <img src={project.image} alt={project.name} />
      </div>
      {/* Adicione mais detalhes do projeto aqui */}
    </div>
  );
};

export default ProjectCard;
