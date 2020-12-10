import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
`;

const MyPage = ({ user }) => {
  const { name, email, photoUrl } = user;
  return (
    <Wrapper>
      <img src={photoUrl} />
      <h1>{name}</h1>
      <p>{email}</p>
    </Wrapper>
  );
};

MyPage.propTypes = {
  user: PropTypes.object.isRequired,
};

export default MyPage;
