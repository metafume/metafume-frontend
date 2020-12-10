import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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

const FloatingButton = ({ user }) => {
  const history = useHistory();

  const handleOnClickMyPage = () => {
    if (user) history.push('/mypage/1234');
    else history.push('/login');
  };

  return (
    <Wrapper>
      <Button
        onClick={handleOnClickMyPage}
        background='#00b894'
        color='#f5f6fa'
      >
      My page
      </Button>
    </Wrapper>
  );
};

FloatingButton.propTypes = {
  user: PropTypes.object,
};

export default FloatingButton;
