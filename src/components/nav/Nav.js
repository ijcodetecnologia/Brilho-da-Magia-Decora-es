'use client';
import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <div className={styles.Nav}>
      <ul>
        {/* <li className={styles.LiNav}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            href=""
          >
            Home
          </Link>
        </li> */}

        <li>
          <Link
            to="kits"
            spy={true}
            smooth={true}
            offset={5}
            duration={600}
            href=""
          >
            Kits
          </Link>
        </li>

        <li>
          <Link
            to="endereco"
            spy={true}
            smooth={true}
            offset={5}
            duration={600}
            href=""
          >
            Endereço
          </Link>
        </li>
        
        <li>
          <Link
            to="parceiros"
            spy={true}
            smooth={true}
            offset={5}
            duration={600}
            href=""
          >
            Parceiros
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
