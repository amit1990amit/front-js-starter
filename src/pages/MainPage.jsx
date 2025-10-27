import React from 'react';
import Header from '../components/Layout/Header';
import ProductsContainer from '../components/products/ProductsContainer';
import CartSection from '../components/cart/CartSection';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="main-content">
        <section className="cart-section">
          <CartSection />
        </section>

        <section className="products-section">
            <ProductsContainer />
        </section>
      </main>
    </div>
  );
};

export default MainPage;
