"use client";
import React, { useState, useEffect } from "react";
import styles from "./ProductPresentation.module.css";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import ProductsList from "../../components/Pagination/ProductsList";
import { Pagination } from "@mui/material";

function ProductPresentation({ products }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(products.map((project) => project.category))];

  const filteredproducts = selectedCategory
    ? products.filter((project) => project.category === selectedCategory)
    : products;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPaginaAtual(1);
  };

  // Paginação

  const handlePageChange = (event, value) => {
    setPaginaAtual(value);
  };

  const itensPorPagina = 12; // Quantidade de itens por página
  const startIndex = (paginaAtual - 1) * itensPorPagina;
  const endIndex = startIndex + itensPorPagina;
  const produtosExibidos = filteredproducts.slice(startIndex, endIndex);

  return (
    <div className={`${styles.productPresentation} container`}>
      <div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChangeCategory={handleCategoryChange}
        />
      </div>
      <div>
        <ProductsList products={produtosExibidos} />
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(filteredproducts.length / itensPorPagina)}
          onChange={handlePageChange}
          page={paginaAtual}
          color="primary"
        />
      </div>
    </div>
  );
}

export default ProductPresentation;
