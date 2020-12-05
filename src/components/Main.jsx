import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchList from './SearchList';
import SearchItem from './SearchItem';

const Main = ({ searchList, onSearch, onResetSearch, loading, error }) => {
  return (
    <>
      <div>Metafume</div>
      <SearchBar onSearch={onSearch} onResetSearch={onResetSearch}/>
      {loading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {searchList ?
        <SearchList>
          {searchList.length > 0 ?
            searchList.map(item => {
              return (
                <SearchItem
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
        </SearchList>
        :
        <>
          {!loading && <div>recents</div>}
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
