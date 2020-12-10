import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import HorizontalProductList from './HorizontalProductList';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .thumnail {
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

  button {
    margin-bottom: 42px;
  }

  h3 {
    font-size: 21px;
    margin-top: 24px;
  }
`;

const MyPage = ({ onLogout, user }) => {
  const { name, email, photoUrl } = user;

  return (
    <Wrapper>
      <img className='thumnail' src={photoUrl} />
      <h1>{name}</h1>
      <p>{email}</p>
      <Button onClick={onLogout}>Logout</Button>
      <h3>My favorites</h3>
      <HorizontalProductList list={user.myFavorite}/>
    </Wrapper>
  );
};

MyPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default MyPage;
