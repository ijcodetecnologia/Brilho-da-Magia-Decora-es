import React from 'react';
import styles from '@/sections/footer/footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.Footer} container`}>
      <div className={styles.FooterConteudo}>
        <div className={styles.FooterCaixa}>
          <img src="./img/logo.png" alt="" />
          <h3>Endereço para retirada:</h3>
          <p>
            Rua: Teodoro Soares, Parque das Garças, São Bernardo do Campo, SP
          </p>
        </div>

        <div className={styles.FooterCaixa}>
          <h3>Contato:</h3>
          <p>Fernanda: (11) 97156-4686</p>
          <p>Tatiane: (11) 91820-0810</p>
        </div>

        <div className={styles.FooterCaixa}>
          <h3>Redes Sociais:</h3>
          <ul className={styles.FooterIcons}>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100091151290585">
                <img src="./icons/face.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/brilhodamagiadecoracoes/">
                <img src="./icons/insta.svg" />
              </a>
            </li>
            <li>
              <a href="https://api.whatsapp.com/send?phone=5511918200810">
                <img src="./icons/whats.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.FooterCopy}>
        <p>
          Copyright© - Todos os direiros reservados - Desenvolvido por <span></span> <a href="https://ijcodetecnologia.github.io/IJCode/"> IJCode</a> 
        </p>
      </div>
    </div>
  );
};

export default Footer;
