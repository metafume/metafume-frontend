import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ConditionalWrapper from './ConditionalWrapper';

const Wrapper = styled.div`
  width: 400px;
  margin: 20px;
  padding: 10px;

  div {
    width: 260px;
    height: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #FFF6F0;
    margin-bottom: 24px;
  }

  img {
    height: inherit;
    mix-blend-mode: multiply;
  }

  h6 {
    font-size: 16px;
    margin: 14px 14px;
    color: #c2c2c2;
  }
`;

const SearchWrapper = styled(Wrapper)`
  width: 800px;
  display: flex;
  align-items: center;
  padding-bottom: 60px;
  border-bottom: 0.4px solid lightgray;

  div {
    width: 140px;
    height: 140px;
    margin-bottom: 0;
    margin-right: 18px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: ${({ mode }) => mode === 'search' ? 'row' : 'column'};
  align-items: center;
  text-decoration: none;
  font-size: ${({ mode }) => mode === 'search' ? '24px' : '18px'};
  text-align: center;
  color: black;
`;

const Product = ({ product, mode }) => {
  const { brand, name, productId, imageUrl } = product;
  return (
    <ConditionalWrapper Wrapper={mode === 'search' ? SearchWrapper : Wrapper}>
      <StyledLink to={`/product/${brand}/${productId}`} mode={mode}>
        <div>
          <img src={imageUrl}/>
         </div>
         <h6>{brand}</h6>
         <h2>{name}</h2>
      </StyledLink>
    </ConditionalWrapper>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  mode: PropTypes.string,
};

export default Product;
