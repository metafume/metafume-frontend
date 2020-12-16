import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './Logo';

const Wrapper = styled.header`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;

  a:nth-child(2) {
    position: absolute;
    width: 200px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  span {
    position: absolute;
    right: 24px;
    color: ${({ theme }) => theme.persianGreen};
  }
`;

const Header = ({ userName }) => {
  return (
    <Wrapper>
      <div />
      <Logo size={21}/>
      <span>{userName && `Hi, ${userName}`}</span>
    </Wrapper>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
};

export default Header;
