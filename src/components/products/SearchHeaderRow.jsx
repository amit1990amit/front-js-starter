import React from 'react';
import SearchBar from './SearchBar';
import Categories from './Categories';
import './ProductsContainer.css';

const SearchHeaderRow = ({
  searchTerm,
  setSearchTerm,
  categories,
  activeCategoryId,
  setActiveCategoryId,
}) => {
  return (
    <div className="search-header-row">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Categories
        categories={categories}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
      />
    </div>
  );
};

export default SearchHeaderRow;
