import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../api';

const ProductDetails = () => {
  const { categoryName, productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await fetchProductDetails(categoryName, productId);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchDetails();
  }, [categoryName, productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
