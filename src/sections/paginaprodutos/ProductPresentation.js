'use client';
import React from 'react';
import styles from '@/sections/paginaprodutos/ProductPresentation.module.css';

function ProductPresentation({ products, selectedCategory }) {
  return (
    <div className={styles.productPresentation}>
      <div className={styles.PgMenu}>
        <h2>Categorias</h2>
        <ul>
          {Array.from(
            new Set(products.map((product) => product.category)).values(),
          ).map((category) => (
            <li
              key={category}
              className={category === selectedCategory ? 'active' : 'disable'}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="products">
        {products
          .filter((product) =>
            selectedCategory ? product.category === selectedCategory : true,
          )
          .map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductPresentation;
