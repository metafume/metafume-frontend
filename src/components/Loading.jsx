import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Loading = ({ children }) => {
  return (
    <Wrapper>
      {children || 'Loading...'}
    </Wrapper>
  );
};

Loading.propTypes = {
  children: PropTypes.node,
};

export default Loading;
