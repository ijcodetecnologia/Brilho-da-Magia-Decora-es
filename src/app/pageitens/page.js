'use client';
import React from 'react';
import ProductPresentation from '../../sections/paginaprodutos/ProductPresentation';
import productsData from '../../../public/produtos.json';
import styles from '@/app/pageitens/PageItens.module.css';
import Fade from 'react-reveal/Fade';

function Products() {
  return (
    <div>
      <div className={styles.Pagekitsf}>
        <Fade top>
          <div className={styles.PageKits}>
            <span>Decorações</span>
            <h2>Nossos Kits</h2>
            <p>
              Temos varios modelos e caso você não encontre um kit do seu agrado
              podemos montar um e enviar as fotos para aprovação, entre em
              contato para mais detalhes!
            </p>
          </div>
        </Fade>
      </div>

      <ProductPresentation products={productsData} />
    </div>
  );
}

export default Products;
