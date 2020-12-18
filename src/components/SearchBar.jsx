import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  width: 70%;
  border-bottom: 0.4px solid lightgray;
  padding: 6px;
  margin-right: 24px;
  font-size: 24px;
  transition: 0.6s width ease-in-out;

  &:hover {
    width: 80%;
  }
`;

const SearchBar = ({ onSearch, onResetSearch }) => {
  const location = useLocation();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!location.search) return;

    const queries = location.search?.split('?');
    queries.shift();

    if (queries.length <= 0) return;

    const keyword = queries
      .find(query => query.split('=')[0] === 'keyword')
      ?.split('=');

    if (keyword?.[1]) setValue(keyword[1]);
  }, []);

  const handleOnChange = ev => {
    setValue(ev.target.value);
    if (ev.target.value === '') onResetSearch();
  };

  const handleOnSubmit = ev => {
    ev.preventDefault();

    if (value.length <= 2) return;
    onResetSearch();
    onSearch(value);
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
  onResetSearch: PropTypes.func.isRequired,
};

export default SearchBar;
