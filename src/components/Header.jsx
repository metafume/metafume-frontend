import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from './Logo';

const Wrapper = styled.header`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a:nth-child(2) {
    position: relative;
    left: -32px;
  }
`;

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  margin-left: 24px;
  color: gray;
`;

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to='/'>Back</StyledLink>
      <Logo size={21}/>
      <div />
    </Wrapper>
  );
};

export default Header;
