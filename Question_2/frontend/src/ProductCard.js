import React from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/images/placeholder1.jpg';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={placeholder} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.company}</p>
      <p>{product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
