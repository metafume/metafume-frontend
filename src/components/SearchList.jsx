import React from 'react';
import PropTypes from 'prop-types';

const SearchList = ({ children }) => {
  return (
    <div>{children}</div>
  );
};

SearchList.propTypes = {
  children: PropTypes.node,
};

export default SearchList;
