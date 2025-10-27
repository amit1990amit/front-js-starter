import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/cart/cartSlice';
import './CartSection.css';

const CartItemRow = ({ product }) => {
  const dispatch = useDispatch();

  const { id, name, price, barcode, image_url, quantity } = product;

  const handleRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-item-row">
      {/* LEFT COLUMN: price + delete */}
      <div className="cart-item-left-col">
        <div className="cart-item-price">₪{price}</div>
        <button className="cart-item-remove-btn" onClick={handleRemove}>
          ✕
        </button>
      </div>

      {/* MIDDLE COLUMN: name / qty / barcode */}
      <div className="cart-item-info">
        <div className="cart-item-topline">
          <div className="cart-item-name">{name}</div>
          <div className="cart-item-qty-badge">{quantity}</div>
        </div>

        <div className="cart-item-barcode">{barcode}</div>
      </div>

      {/* RIGHT COLUMN: thumbnail */}
      <div className="cart-item-right">
        <img
          src={image_url}
          alt={name}
          className="cart-item-thumb"
        />
      </div>
    </div>
  );
};

export default CartItemRow;
