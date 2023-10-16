'use client';
import React from 'react';
import styles from './banner.module.css';
import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <div className={`${styles.Banner} container`}>
      <Fade top>
        <h2>Decorações</h2>
        <h1>Brilho da Magia</h1>
      </Fade>

      <Fade bottom>
        <p>Sua festa do jeitinho que você sempre imaginou!</p>
      </Fade>
    </div>
  );
};

export default Banner;
