import React from 'react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, selectedCategory, onChangeCategory }) => {
  return (
    <div className={styles.MenuLateralCaixa}>
      <div className={styles.MenuLateral}>
        <p>Filtrar por Categoria:</p>
        {/* <ul className={styles.MenuLateral}>
          <li>
            <a
              href="#"
              className={selectedCategory === '' ? 'active' : ''}
              onClick={() => onChangeCategory('')}
            >
              Todas Kits
            </a>
          </li>
        </ul> */}
        {categories.map((category, index) => (
          <ul className={styles.MenuLateral} key={index}>
            <li>
              <a
                key={category}
                href="#"
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => onChangeCategory(category)}
              >
                {category}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
