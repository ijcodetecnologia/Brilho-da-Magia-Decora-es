'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './MenuMobile.module.css';

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef();

  const handleToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.containerMobile}>
      <button className={styles.mobileMenuIcon} onClick={handleToggle}></button>

      <nav
        className={`${styles.listMobile}  ${
          mobileMenu ? styles.listMobileActive : styles.listMobile
        }`}
      >
        <ul>
          <li>
            <Link
              to=""
              spy={true}
              smooth={true}
              offset={5}
              duration={600}
              href="/pageitens"
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
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
