import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import api from '../utils/api';

import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Product from './Product';

const Main = ({ searchList, onSearch, onResetSearch, loading, error }) => {
  const { data: recentViewList } = useSWR('/products/recent', api.getRecentViewList);

  return (
    <>
      <div>Metafume</div>
      <SearchBar onSearch={onSearch} onResetSearch={onResetSearch}/>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {searchList ?
        <ProductList>
          {searchList.length > 0 ?
            searchList.map(item => {
              return (
                <Product
                  key={item.productId}
                  brand={item.brand}
                  name={item.name}
                  productId={item.productId}
                  imageUrl={item.imageUrl}
                />
              );
            })
            :
            <div>No result..</div>
          }
        </ProductList>
        :
        <>
          {!loading && <div>Recents</div>}
          {!loading && recentViewList &&
            <ProductList>
              {recentViewList.map(item => {
                return (
                  <Product
                    key={item.productId}
                    brand={item.brand}
                    name={item.name}
                    productId={item.productId}
                    imageUrl={item.imageUrl}
                  />
                );
              })}
            </ProductList>
          }
        </>
      }
    </>
  );
};

Main.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onResetSearch: PropTypes.func.isRequired,
  searchList: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Main;
