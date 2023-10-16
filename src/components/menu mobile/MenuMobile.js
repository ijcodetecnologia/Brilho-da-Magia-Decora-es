"use client";
import { Link } from "react-scroll";
import React, { useState, useEffect, useRef } from "react";
import styles from "./MenuMobile.module.css";

const MenuMobile = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
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
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          Home
        </Link>
        <Link
          to="redes"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          Redes Sociais
        </Link>
        <Link
          to="contato"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          Contato
        </Link>
        <Link
          to="parceiros"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href=""
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          Parceiros
        </Link>
      </nav>
    </div>
  );
};

export default MenuMobile;
