import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const ProductList = ({ list }) => {
  return (
    <div>
      {
        list.length > 0 ?
        list.map(item => {
          return <Product key={item.productId} product={item}/>;
        })
        :
        <div>No items..</div>
      }
    </div>
  );
};

ProductList.propTypes = {
  list: PropTypes.array,
};

export default ProductList;
