import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const StyledForm = styled.form`
  width: inherit;
  display: flex;
  justify-content: center;
`;

const StyledInput = styled.input`
  all: unset;
  width: 80%;
  border-bottom: 0.4px solid lightgray;
  padding: 6px;
  margin-right: 24px;
  font-size: 24px;
`;

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
    <StyledForm onSubmit={handleOnSubmit}>
      <StyledInput
        type='search'
        placeholder='search'
        value={value}
        onChange={handleOnChange}
      />
      <Button onClick={handleOnSubmit}>Find</Button>
    </StyledForm>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onResetSearch: PropTypes.func,
};

export default SearchBar;
