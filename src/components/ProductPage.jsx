import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ProductPage = ({ product }) => {
  const params = useParams();
  console.log('ProductPage ~ params', params);
  console.log('ProductPage ~ product', product);

  return (
    <>
      {product ?
        <div>Product Page</div>
        :
        <div>Loading...</div>
      }
    </>
  );
};

ProductPage.propTypes = {
  product: PropTypes.object,
};

export default ProductPage;
