import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import api from '../utils/api';

import SearchBar from './SearchBar';
import ProductList from './ProductList';

const Main = ({ searchList, onSearch, onResetSearch, loading, error }) => {
  const { data: recentViewList } = useSWR('/products/recent', api.getRecentViewList);

  return (
    <>
      <div>Metafume</div>
      <div>
        <SearchBar onSearch={onSearch} onResetSearch={onResetSearch}/>
        {loading && <div>loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <div>
        {
          searchList ?
          <ProductList list={searchList}/>
          :
          <div>
            {!loading && recentViewList &&
              <>
                <div>Recents</div>
                <ProductList list={recentViewList}/>
              </>
            }
          </div>
        }
      </div>
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
