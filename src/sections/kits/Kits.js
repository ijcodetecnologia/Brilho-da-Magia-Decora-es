'use client';
import React from 'react';
import styles from '@/sections/kits/Kits.module.css';
import Fade from 'react-reveal/Fade';

const Kits = () => {
  return (
    <div className={`${styles.Kits}`} id="kits">
      <div className={`${styles.KitsCaixa} container`}>
        <Fade top>
          <div className={styles.KitsTexto}>
            <div className={styles.KitsTexto1}>
              <span>Decorações</span>
              <h2>Veja Nossos Kits</h2>
              <p>
                Nos acompanhe nas redes sociais, sempre estamos postando os
                novos kits.
              </p>

              <p>
                Temos varios modelos e caso você não encontre um kit do seu
                agrado podemos montar um e enviar as fotos para aprovação, entre
                em contato para mais detalhes!
              </p>
            </div>

            <div className={styles.KitsTexto2}>
              <span>Tatiane: (11) 91820-0810 - Fernanda: (11) 97156-4686</span>

              <div className={styles.KitsA}>
                <a
                  href="https://www.instagram.com/brilhodamagiadecoracoes/"
                  target="blanc"
                >
                  <img src="./icons/insta.svg" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100091151290585"
                  target="blanc"
                >
                  <img src="./icons/face.svg" />
                </a>
              </div>

              <button>
                <a href="/pageitens">Ver todos</a>
              </button>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className={styles.KitsImg}>
            <a href="/pageitens">
              <img src="./img/imgkits.png" alt="" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Kits;
