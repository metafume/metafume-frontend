import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  font-size: ${({ size }) => size ? `${size}px` : '32px'};
  font-weight: 800;
  color: black;
`;

const Logo = ({ size }) => {
  return (
    <StyledLink to='/' size={size}>
      Metafume
    </StyledLink>
  );
};

Logo.propTypes = {
  size: PropTypes.number,
};

export default Logo;
