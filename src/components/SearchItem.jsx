import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchItem = ({ name, productId, imageUrl }) => {
  return (
    <Link to={`/product/${productId}`}>
      <img src={imageUrl}/>
      <h2>{name}</h2>
    </Link>
  );
};

SearchItem.propTypes = {
  name: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default SearchItem;
