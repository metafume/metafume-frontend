import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchItem = ({ brand, name, productId, imageUrl }) => {
  return (
    <Link to={`/product/${brand}/${productId}`}>
      <img src={imageUrl}/>
      <h2>{name}</h2>
    </Link>
  );
};

SearchItem.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default SearchItem;
