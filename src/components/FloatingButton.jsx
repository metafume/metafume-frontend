import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from './styles/theme';

import Button from './Button';

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
  bottom: -14px;
  right: 20px;
  width: 140px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FloatingButton = ({ onClick, children, background, color }) => {
  return (
    <Wrapper>
      <Button
        onClick={onClick}
        background={background || theme.persianGreen}
        color={color || theme.whisper}
      >
      {children}
      </Button>
    </Wrapper>
  );
};

FloatingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  background: PropTypes.string,
  color: PropTypes.string,
};

export default FloatingButton;
