// src/components/layout/Header.jsx
import React from 'react';
import './Header.css';
import payplusLogo from '../../assets/images/payplus-logo.svg';

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <div className="header-left">
          <img
            src={payplusLogo}
            alt="PayPlus"
            className="header-logo"
          />
          <span className="header-version">v1.0.15</span>
        </div>

        <div className="header-right">
        </div>
      </div>
    </header>
  );
};

export default Header;
