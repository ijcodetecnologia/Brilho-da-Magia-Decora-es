import React from "react";
import styles from "./CategoryFilter.module.css";

const CategoryFilter = ({ categories, selectedCategory, onChangeCategory }) => {
  return (
    <div className={styles.MenuLateralCaixa}>
      <div className={styles.MenuLateral}>
        <p>Filtrar por Categoria:</p>
        <ul className={styles.MenuLateral}>
          <li>
            <button
              type="button"
              className={selectedCategory === "" ? "active" : ""}
              onClick={() => onChangeCategory("")}
            >
              Todas Kits
            </button>
          </li>
        </ul>
        {categories.map((category, index) => (
          <ul className={styles.MenuLateral} key={index}>
            <li>
              <button
                type="button"
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => onChangeCategory(category)}
              >
                {category}
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
