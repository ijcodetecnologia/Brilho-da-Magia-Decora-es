'use client';
import React from 'react';
import styles from '@/components/menulateral/MenuLateral.module.css';

const MenuLateral = () => {
  return (
    <div className={styles.MenuLateral}>
      {/* <h3>Kits </h3> */}
      <ul>
        <li><a href="">Infantil Feminino</a></li>
        <li><a href="">Infantil Masculino</a></li>
        <li><a href="">Aniversário</a></li>
        <li><a href="">15 Anos</a></li>
        <li><a href="">Tematicos</a></li>
        <li><a href="">Chá de Bebe</a></li>
        <li><a href="">Cha de Cozinha</a></li>
        <li><a href="">Chá Revelação</a></li>
        <li><a href="">Casamento</a></li>
        <li><a href="">Bodas</a></li>
      </ul>
    </div>
  )
}

export default MenuLateral







