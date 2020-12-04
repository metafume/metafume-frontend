import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import SearchList from './SearchList';
import SearchItem from './SearchItem';

const Main = ({ searchList, onSearch, onResetSearch }) => {

  return (
    <>
      <div>Metafume</div>
      <SearchBar onSearch={onSearch} onResetSearch={onResetSearch}/>
      {searchList &&
        <SearchList>
          {searchList.length > 0 ?
            searchList.map(item => {
              return (
                <SearchItem
                  key={item.productId}
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
      }
    </>
  );
};

Main.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onResetSearch: PropTypes.func.isRequired,
  searchList: PropTypes.array,
};

export default Main;
