import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductList from './ProductList';

const Wrapper = styled.div`
  width: 100vw;
  height: inherit;
  display: flex;
  overflow-x: auto;
`;

const RecentViewList = ({ list }) => {
  return (
    <Wrapper>
      <ProductList list={list}/>
    </Wrapper>
  );
};

RecentViewList.propTypes = {
  list: PropTypes.array,
};

export default RecentViewList;
