'use client';
import React, { useState } from 'react';
import styles from './ProductPresentation.module.css';
import CategoryFilter from '@/components/CategoryFilter/CategoryFilter';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

function ProductPresentation({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(products.map((project) => project.category))];

  const filteredproducts = selectedCategory
    ? products.filter((project) => project.category === selectedCategory)
    : products;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.productPresentation}>
      <div>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChangeCategory={handleCategoryChange}
        />
      </div>
      <div className={styles.productPresentation}>
        {filteredproducts.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProductPresentation;
