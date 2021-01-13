import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductList from './ProductList';

const Wrapper = styled.div`
  width: 100vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VerticalProductList = ({ list }) => {
  return (
    <Wrapper>
      {
        list.length > 0 ?
        <ProductList list={list} mode='search'/>
        :
        <p>No Result</p>
      }
    </Wrapper>
  );
};

VerticalProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    brand: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default VerticalProductList;
