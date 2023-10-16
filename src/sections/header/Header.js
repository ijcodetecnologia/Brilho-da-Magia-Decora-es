import React from 'react';
import styles from './header.module.css'
import Nav from '@/components/nav/Nav';
import Button from '@/components/button/Button';
import MenuMobile from '@/components/menu mobile/MenuMobile';

const Header = () => {
  return (
    <div className={`${styles.Header} container`} id='header'>  
      <div>
        <img className={styles.ImgHeader} src="./img/logo.svg" alt="logotipo" />
      </div>

      <div className={styles.NavHeader}>
        <Nav />
        <Button />
        <div className={styles.menuHamburguer}>
          <MenuMobile />
        </div>
      </div>
    </div>
  )
}

export default Header
