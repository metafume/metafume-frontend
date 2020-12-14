import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loading from './Loading';

const ErrorBox = ({ message, back }) => {
  return (
    <Loading>
      <p style={{ color: 'salmon', marginBottom: '40px' }}>{message || 'No message'}</p>
      {back && <Link to='/' style={{ color: 'black' }}>Back</Link>}
    </Loading>
  );
};

ErrorBox.propTypes = {
  message: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default ErrorBox;
