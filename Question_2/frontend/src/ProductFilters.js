import React from 'react';

const ProductFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters">
      <select name="category" onChange={handleChange} value={filters.category}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home">Home</option>
        {/* Add more categories as needed */}
      </select>
      <select name="company" onChange={handleChange} value={filters.company}>
        <option value="">All Companies</option>
        <option value="CompanyA">Company A</option>
        <option value="CompanyB">Company B</option>
        <option value="CompanyC">Company C</option>
        {/* Add more companies as needed */}
      </select>
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        onChange={handleChange}
        value={filters.minPrice}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        onChange={handleChange}
        value={filters.maxPrice}
      />
      <select name="sort" onChange={handleChange} value={filters.sort}>
        <option value="">Sort By</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
        <option value="discount">Discount</option>
      </select>
      <select name="order" onChange={handleChange} value={filters.order}>
        <option value="">Order</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={() => setFilters({ ...filters, page: 1 })}>Apply Filters</button>
    </div>
  );
};

export default ProductFilters;
