import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, liked, toggleLike }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img className="product-image" src={product.thumbnail} alt={product.title} />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-description">{product.description}</p>
      <div className="buttons" onClick={(e) => e.stopPropagation()}>
      <p className="card-price">${product.price}</p>
        <button
          className={`like-button ${liked ? 'liked' : ''}`}
          onClick={() => toggleLike(product)}
        >
          {liked ? '❤️':'♡'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
