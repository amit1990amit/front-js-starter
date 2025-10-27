import React from 'react';
import './ProductsList.css';
import ProductCard from './ProductCard';


const ProductsList = ({ products = [] }) => {
  return (
    <div className="products-list">
      <div className="products-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;