import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useSWR from 'swr';

import api from '../utils/api';

import Button from './Button';
import HorizontalProductList from './HorizontalProductList';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  margin-top: 160px;
  padding: 40px 0;
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
    margin-bottom: 16px;
  }
`;

const ListWrapper = styled.div`
  width: 100%;
  margin: 24px 0;

  h3 {
    font-size: 21px;
    margin-left: 42px;
  }
`;

const MyPage = ({ onLogout, onSubscribe, user }) => {
  const { _id: userId, name, email, photoUrl, isSubscribed, myFavorite } = user;
  const { data: recommendList } = useSWR(userId, api.getRecommendList, {
    shouldRetryOnError: false,
  });

  const handleOnSubscribe = () => {
    if (isSubscribed) onSubscribe(userId, false);
    else onSubscribe(userId, true);
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <img className='thumnail' src={photoUrl}/>
        <h1>{name}</h1>
        <p>{email}</p>
        <Button onClick={onLogout} background='salmon'>Logout</Button>
        <Button
          onClick={handleOnSubscribe}
          background={isSubscribed ? 'gray' : 'black'}
        >
          {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </Button>
      </ProfileWrapper>
      <ListWrapper>
        <h3>My favorites</h3>
        <HorizontalProductList list={myFavorite}/>
      </ListWrapper>
      {recommendList &&
        <ListWrapper>
          <h3>Recommend for you</h3>
          <HorizontalProductList list={recommendList}/>
        </ListWrapper>
      }
    </Wrapper>
  );
};

MyPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default MyPage;
