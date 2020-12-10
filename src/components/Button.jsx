import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 16px 26px;
  font-size: ${({ size }) => size ? `${size}px` : '18px'};
  background-color: ${({ background }) => background ? background : '#000'};
  color: ${({ color }) => color ? color : '#fff'};
`;

const Button = ({ onClick, children, size, background, color }) => {
  return (
    <StyledButton
      onClick={onClick}
      size={size}
      background={background}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  size: PropTypes.number,
  background: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
