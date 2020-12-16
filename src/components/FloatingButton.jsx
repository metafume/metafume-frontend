import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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

const FloatingButton = ({ user }) => {
  const history = useHistory();

  const handleOnClickMyPage = () => {
    if (user) history.push(`/mypage/${user._id}`);
    else history.push('/login');
  };

  return (
    <Wrapper>
      <Button
        onClick={handleOnClickMyPage}
        background={theme.persianGreen}
        color={theme.whisper}
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
