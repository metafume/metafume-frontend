import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Loading from './Loading';

const StyledParameter = styled.p`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.salmon};
`;

const ErrorBox = ({ message, back }) => {
  return (
    <Loading>
      <StyledParameter>{message || 'No message'}</StyledParameter>
      {back && (
        <Link to='/' style={{ color: 'black' }}>
          Back
        </Link>
      )}
    </Loading>
  );
};

ErrorBox.propTypes = {
  message: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default ErrorBox;
