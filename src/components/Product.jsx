import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { brand, name, productId, imageUrl } = product;
  return (
    <Link to={`/product/${brand}/${productId}`}>
      <img width='100px' src={imageUrl}/>
      <h2>{name}</h2>
    </Link>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
