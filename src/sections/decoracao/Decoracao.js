'use client';
import Fade from 'react-reveal/Fade';
import React from 'react';
import styles from './decoracao.module.css';
import Button from '@/components/button/Button';

const Decoracao = () => {
  return (
    <div className={`${styles.Decoracao} container`}>
      <Fade left>
        <div className={styles.DecoracaoImg}>
          <img src="./img/img1.webp" alt="Imagem de decoração de unicornio" />
        </div>
      </Fade>

      <Fade right>
        <div className={styles.DecoracaoTexto}>
          <span>Magia-</span>
          <h2>Nossa Decoração</h2>
          <p>
            Na Brilho da Magia, acreditamos que cada celebração merece brilhar
            com um toque único e encantador. Somos uma empresa de decoração de
            festas apaixonada por transformar ocasiões especiais em eventos
            verdadeiramente mágicos. Nossa missão é levar a magia do seu sonho e
            transformá-la em uma realidade deslumbrante que encantará todos os
            seus convidados.
          </p>

          <Button />
        </div>
      </Fade>
    </div>
  );
};

export default Decoracao;
