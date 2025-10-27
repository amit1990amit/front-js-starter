import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, image_url } = product;

  const handleClick = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={image_url} alt={name} />
      <div className="product-card-info">
        <span className="product-card-name">{name}</span>
        <span className="product-card-price">₪{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
