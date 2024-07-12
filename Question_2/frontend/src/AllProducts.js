import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import Pagination from '../components/Pagination';

const AllProducts = () => {
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: '',
    maxPrice: '',
    sort: '',
    order: '',
    page: 1
  });
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { products, totalPages } = await fetchProducts(
          filters.category,
          filters.sort,
          filters.order,
          filters.page,
          10
        );
        setProducts(products);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, [filters]);

  return (
    <div className="all-products">
      <ProductFilters filters={filters} setFilters={setFilters} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        page={filters.page}
        setPage={page => setFilters({ ...filters, page })}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AllProducts;
