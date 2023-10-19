'use client';
import React from 'react';
import styles from './nav.module.css';
import { Link as LinkScroll } from 'react-scroll';
import Link from 'next/link';

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
            to=""
            spy={true}
            smooth={true}
            offset={5}
            duration={600}
            href="/pagekits"
          >
            TodosKits
          </Link>
        </li>

        <li>
          <LinkScroll
            to="endereco"
            spy={true}
            smooth={true}
            offset={5}
            duration={600}
            href=""
          >
            Endereço
          </LinkScroll>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
