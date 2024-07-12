import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  return (
    <Routes>
      <Route path="/product/:productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default ProductPage;
