// src/components/Products.js
import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../productContext/ProductContext';
import ProductCard from '../productCard/ProductCard';
import './Product.css';

const Products = () => {
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_PRODUCTS', payload: data.products }));
  }, [dispatch]);

  const toggleLike = (product) => {
    dispatch({ type: 'TOGGLE_LIKE_PRODUCT', payload: product.id });
  };

  return (
    <div className="container">
      <select>
        <option value="">Sort by</option>
        <option value="price-asc">Popular</option>
        <option value="price-desc">Cheaper</option>
        <option value="price-desc">Expensive</option>
        <option value="price-desc">Rating is high</option>

      </select>
      <div className="card-grid">
        {state.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            liked={state.likedProducts.includes(product.id)}
            toggleLike={toggleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
