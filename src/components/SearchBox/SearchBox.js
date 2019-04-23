import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => (
  <div className="SearchBox">
    <input
      className="SearchInput"
      type="search"
      placeholder="search robots"
      onChange={searchChange}
    />
  </div>
);

export default SearchBox;
