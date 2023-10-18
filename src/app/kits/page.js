'use client';
import Fade from 'react-reveal/Fade';
import React from 'react';
import Button from '@/components/button/Button';
import styles from './kit.module.css';

const Kit = () => {
  return (
    <div className={`${styles.Kit} container`} id='kits'>
      <Fade bottom>
        <div className={styles.kitCaixa}>
          <div className={styles.HeaderKit}>
            <h2>Kit - Pegue e Monte</h2>
            <p>Entre em contato para mais detalhes</p>
          </div>

          <div className={styles.KitConteudo}>
            <div className={styles.KitValor}>
              <p>Valor a partir de</p>
              <span>R$ 150,00</span>
            </div>

            <ul>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}
                Aniversários
              </li>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}
                Casamentos
              </li>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}
                Quinze Anos
              </li>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}
                Chá Revelação
              </li>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}
                Chá de Bebe
              </li>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}
                Batizados
              </li>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}
                Bodas
              </li>
              <li>
                {/* <img src="./img/icon-spa.svg" alt="icon spa" /> */}E muito
                mais!
              </li>
            </ul>
          </div>

          <Button />
        </div>
      </Fade>
    </div>
  );
};

export default Kit;
