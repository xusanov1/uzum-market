import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../productContext/ProductContext';
import './Single.css';

const ProductDetails = () => {
  const { state } = useContext(ProductContext);
  const { id } = useParams();
  const product = state.products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="details-container">
      <h1 className="details-title">{product.title}</h1>
      <img className="details-image" src={product.img} alt={product.title} />
      <p className="details-description">{product.description}</p>
      <p className="details-price">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
