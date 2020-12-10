import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductList from './ProductList';

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

const VerticalProductList = ({ list }) => {
  return (
    <Wrapper>
      <ProductList list={list} mode='search'/>
    </Wrapper>
  );
};

VerticalProductList.propTypes = {
  list: PropTypes.array,
};

export default VerticalProductList;
