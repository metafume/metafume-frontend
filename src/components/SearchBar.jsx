import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch, onResetSearch }) => {
  const [value, setValue] = useState('');

  const handleOnChange = ev => {
    setValue(ev.target.value);

    if (ev.target.value === '') {
      onResetSearch();
    }
  };

  const handleOnSubmit = ev => {
    ev.preventDefault();
    if (value.length >= 2) {
      onResetSearch();
      onSearch(value);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type='search' placeholder='search' value={value} onChange={handleOnChange} />
      <button onClick={handleOnSubmit}>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onResetSearch: PropTypes.func,
};

export default SearchBar;
