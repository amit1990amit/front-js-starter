import { useState, useMemo } from 'react';
import products from '../../data/products.json';
import categories from '../../data/categories.json';

import SearchHeaderRow from './SearchHeaderRow';
import ProductsList from './ProductsList';
import './ProductsContainer.css';

const ProductsContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategoryId, setActiveCategoryId] = useState(null); // null = all

  const filteredProducts = useMemo(() => {
    // normalize search
    const term = searchTerm.trim().toLowerCase();

    return products.filter((p) => {
      // category filter
      const categoryOk =
        activeCategoryId === null || p.category_id === activeCategoryId;

      // text filter: name OR barcode includes term (if any term)
      const textOk =
        term === '' ||
        p.name?.toLowerCase().includes(term) ||
        p.barcode?.toLowerCase().includes(term);

      return categoryOk && textOk;
    });
  }, [searchTerm, activeCategoryId]);

  return (
    <div className="products-container">
      <div className="top-section">
        <SearchHeaderRow
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          activeCategoryId={activeCategoryId}
          setActiveCategoryId={setActiveCategoryId}
        />
      </div>

      <div className="list-section">
        <ProductsList products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsContainer;
