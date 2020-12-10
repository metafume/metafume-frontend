import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    border-radius: 50%;
    margin-bottom: 24px;
  }

  h1 {
    font-size: 42px;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 42px;
  }
`;

const MyPage = ({ onLogout, user }) => {
  const { name, email, photoUrl } = user;

  return (
    <Wrapper>
      <img src={photoUrl} />
      <h1>{name}</h1>
      <p>{email}</p>
      <Button onClick={onLogout}>Logout</Button>
    </Wrapper>
  );
};

MyPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default MyPage;
