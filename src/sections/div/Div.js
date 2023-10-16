'use client';
import Fade from 'react-reveal/Fade';
import React from 'react';
import styles from '@/sections/div/div.module.css';

const Div = () => {
  return (
    <div className={`${styles.Div} container`}>
      <Fade big>
        <h2>Seu Aniversário</h2>
        <p>Do jeitinho que você sempre imaginou!</p>
      </Fade>

      <div className={styles.DivIcons}>
        <div>
          <a
            href="https://www.instagram.com/brilhodamagiadecoracoes/"
            target="blank"
          >
            <img src="./icons/insta.svg" alt="" />
          </a>
        </div>

        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100091151290585"
            target="blank"
          >
            <img src="./icons/face.svg" alt="" />
          </a>
        </div>

        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5511918200810"
            target="blank"
          >
            <img src="./icons/whats.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Div;
