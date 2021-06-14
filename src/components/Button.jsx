import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn } from './styles/keyframes';

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 16px 26px;
  border: 2px transparent solid;
  background-color: ${({ background }) => (background ? background : '#000')};
  font-size: ${({ size }) => (size ? `${size}px` : '16px')};
  color: ${({ color }) => (color ? color : '#fff')};
  transition: border 0.4s, color 0.4s, background-color 0.4s;
  animation: 1s ${fadeIn};

  &:hover {
    color: ${({ background }) => (background ? background : '#000')};
    border: 2px ${({ background }) => (background ? background : '#000')} solid;
    background-color: transparent;
  }
`;

const Button = ({ onClick, children, size, background, color }) => {
  return (
    <StyledButton onClick={onClick} size={size} background={background} color={color}>
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
