import React from 'react';
import styles from './header.module.css';
import Nav from '@/components/nav/Nav';
import Button from '@/components/button/Button';
import MenuMobile from '@/components/menu mobile/MenuMobile';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={`${styles.Header} container`} id="header">
      <div className={styles.ImgHeader}>
        <Link
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href="/"
          >
            <img src="./img/logo.svg" alt="logotipo" />
          </Link>
      </div>

      <div className={styles.NavHeader}>
        <Nav />
        <Button />
        <div className={styles.menuHamburguer}>
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

export default Header;
