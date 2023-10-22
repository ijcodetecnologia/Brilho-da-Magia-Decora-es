import React from 'react';
import styles from '@/app/pagekits/pagekits.module.css';
import MenuLateral from '@/components/menulateral/MenuLateral';
import SessaoImg from '../sessaoimgs/page';

const PageKits = () => {
  return (
    <div className={styles.Pagekit} id="pagekits">
      <div className={styles.Pagekitsf}>
        <div className={styles.PageKits}>
          <span>Decorações</span>
          <h2>Veja Nossos Kits</h2>
          <p>
            Temos varios modelos e caso você não encontre um kit do seu agrado
            podemos montar um e enviar as fotos para aprovação, entre em contato
            para mais detalhes!
          </p>
        </div>
      </div>

      <div className="container">
        <div className={styles.SessaoProdutos}>
          <div>
            <MenuLateral />
          </div>

          <div>
            <SessaoImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageKits;
