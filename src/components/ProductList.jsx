import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductList = ({ list, mode }) => {
  return (
    <>
      {
        list.length > 0 &&
        list.map(item => {
          return <Product key={item.productId} product={item} mode={mode}/>;
        })
      }
    </>
  );
};

ProductList.propTypes = {
  list: PropTypes.array,
  mode: PropTypes.string,
};

export default ProductList;
