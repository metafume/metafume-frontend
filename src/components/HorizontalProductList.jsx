import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductList from './ProductList';

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  overflow-x: auto;
`;

const HorizontalProductList = ({ list }) => {
  return (
    <Wrapper>
      <ProductList list={list} />
    </Wrapper>
  );
};

HorizontalProductList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      productId: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default HorizontalProductList;
