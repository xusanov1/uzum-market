// src/components/LikedProductsPage.js
import React, { useContext } from 'react';
import { ProductContext } from '../productContext/ProductContext';
import ProductCard from '../productCard/ProductCard';
import './LikedProduct.css';

const LikedProductsPage = () => {
  const { state } = useContext(ProductContext);

  return (
    <div className="container">
      <h1 className="title">Liked Products</h1>
      <div className="card-grid">
        {state.products
          .filter((product) => state.likedProducts.includes(product.id))
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              liked={state.likedProducts.includes(product.id)}
              toggleLike={() => {}}
            />
          ))}
      </div>
    </div>
  );
};

export default LikedProductsPage;
