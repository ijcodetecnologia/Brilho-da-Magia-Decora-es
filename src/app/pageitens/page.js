'use client'
import React, { useState } from 'react';
import ProductPresentation from '../../sections/paginaprodutos/ProductPresentation';
import productsData from '../../../public/produtos.json';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div>
      <h1>Produtos</h1>
      <ProductPresentation
        products={productsData}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default Products;
