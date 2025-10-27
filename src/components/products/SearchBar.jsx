import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-bar-inner">
        <span className="search-bar-icon">🔍</span>
        <input
          className="search-bar-input"
          type="text"
          placeholder="חיפוש לפי שם או ברקוד..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
