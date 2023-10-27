// Paginacao.js
import React from "react";
import { Pagination } from "@mui/material";

const PaginationFunction = ({ totalPages, onPageChange }) => {
  const handleChange = (event, value) => {
    console.log('valor', value)
    onPageChange(value);
  };

  return (
    <Pagination count={totalPages} onChange={handleChange} color="primary" />
  );
};

export default PaginationFunction;
