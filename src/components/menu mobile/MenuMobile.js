'use client';
import { Link } from 'react-scroll';
import React, { useState, useEffect, useRef } from 'react';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.containerMobile}>
      <button
        className={styles.mobileMenuIcon}
        onClick={() => setMobileMenu(!mobileMenu)}
      ></button>

      <nav
        className={`${styles.listMobile}  ${
          mobileMenu ? styles.listMobileActive : styles.listMobile
        }`}
        ref={menuRef}
      >
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
      </nav>
    </div>
  );
};

export default MenuMobile;
