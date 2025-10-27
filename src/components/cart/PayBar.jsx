import React from "react";
import './CartSection.css';

const PayBar = ({ total }) => {
  const formattedTotal = `₪${total.toFixed(2)}`;

  return (
    <div className="cart-footer-bar">
      <div className="cart-total">{formattedTotal}</div>
      <button className="cart-pay-btn">לתשלום</button>
    </div>
  );
};

export default PayBar;
