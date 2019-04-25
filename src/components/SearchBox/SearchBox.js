import React from 'react';
import './SearchBox.css';

// eslint-disable-next-line react/prop-types
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
