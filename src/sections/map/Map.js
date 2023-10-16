'use client';
import Fade from 'react-reveal/Fade';
import React from 'react';
import styles from '@/sections/map/map.module.css';

const Map = () => {
  return (
    <div className={`${styles.Map} container`} id='endereco'>
      <Fade left>
        <div className={styles.MapTexto}>
          <img src="./img/contato.png" alt="" />
        </div>
      </Fade>

      <Fade right>
        <div className={styles.MapMap}>
          <h2>Observação:</h2>
          <p>
            Nosso endereço é somente para retirada, atendimento ao cliente
            somente via WhatsApp.
          </p>
          <a
            href="https://www.google.com/maps/place/R.+Teodoro+Soares+-+S%C3%A3o+Bernardo+do+Campo,+SP,+09856-500/@-23.7483009,-46.6166775,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce469412ce5bf7:0xac989fa924ee7ea7!8m2!3d-23.7483009!4d-46.6166775!16s%2Fg%2F11cly9fvht?entry=ttu"
            target="blank"
          >
            <img src="./img/map.png" alt="" />
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default Map;
