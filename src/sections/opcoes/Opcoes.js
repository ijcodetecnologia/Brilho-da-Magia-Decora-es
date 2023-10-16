import React from 'react';
import styles from './opcoes.module.css';
import Button from '@/components/button/Button'

const Opcoes = () => {
  return (
    <div className={`${styles.Opcoes} container`}>
      <div className={styles.OpcoesTexto}>
        <span>Decoração-</span>
        <h2>Nossas Opções:</h2>
        
        <p>Aniversário; <br></br> Batizado; <br></br> Casamento; <br></br>Chá revelação; <br></br>Chá de bebe; <br></br>Chá lingerie; <br></br>Quinze anos; <br></br> Ano novo; <br></br> Bodas; <br></br>E muito mais.</p>

        <Button />
      </div>
      
      <div className={styles.OpcoesImg}>
        <img src="./img/img2.jpg" alt="Imagem de decoração de unicornio" />
      </div>
    </div>
  )
}

export default Opcoes
