import axios from 'axios';

const API_URL = 'http://localhost:3000/categories';

export const fetchProducts = async (categoryName, sort, order, page, n) => {
  try {
    const response = await axios.get(`${API_URL}/${categoryName}/products`, {
      params: { sort, order, page, n }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetails = async (categoryName, productId) => {
  try {
    const response = await axios.get(`${API_URL}/${categoryName}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};
