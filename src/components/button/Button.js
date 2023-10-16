import React from 'react';
import styles from './button.module.css';

const Button = () => {
  return (
    <div>
      <button className={styles.button}><a href="https://api.whatsapp.com/send?phone=5511918200810" target='blank'>Contato</a></button>
    </div>
  )
}

export default Button
