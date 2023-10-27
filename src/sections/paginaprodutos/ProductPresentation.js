"use client";
import React, { useState, useEffect } from "react";
import styles from "./ProductPresentation.module.css";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import ProductsList from "../../components/Pagination/productList/ProductsList";
import PaginationFunction from "../../components/Pagination/PaginationFunction";

function ProductPresentation({ products }) {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(products.map((project) => project.category))];

  const filteredproducts = selectedCategory
    ? products.filter((project) => project.category === selectedCategory)
    : products;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Paginação
  const handlePageChange = (novaPagina) => {
    setPaginaAtual(novaPagina);
  };

  const itensPorPagina = 10; // Quantidade de itens por página
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
        <PaginationFunction
          totalPages={Math.ceil(filteredproducts.length / itensPorPagina)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ProductPresentation;
