// ListaProdutosComponente.js
import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import styles from "./ProductsList.module.css";

const ProductsList = ({ products }) => {
  return (
    <div className={styles.productCard}>
      {products.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProductsList;
