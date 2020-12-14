import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './styles/theme';
import { getToken, deleteToken } from '../utils/helpers';

import GlobalStyle from './styles/GlobalSyle';
import MainContainer from '../containers/MainContainer';
import ProductPageContainer from '../containers/ProductPageContainer';
import FloatingButton from './FloatingButton';
import Header from './Header';
import MyPage from './MyPage';
import Login from './Login';

const App = ({
  onLoad,
  onLogin,
  onLogout,
  onSubscribe,
  user,
  error,
}) => {
  useEffect(() => {
    onLoad(getToken());
  }, []);

  useEffect(() => {
    if (!error) return;
    if (getToken()) deleteToken();
  }, [error]);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header userName={user?.name}/>
      <FloatingButton user={user}/>
      <Switch>
        <Route exact path='/'>
          <MainContainer />
        </Route>
        <Route path='/product/:brand/:id'>
          <ProductPageContainer />
        </Route>
        <Route path='/login'>
          {user ? <Redirect to='/'/> : <Login onLogin={onLogin}/>}
        </Route>
        <Route path='/mypage/:id'>
          {
            user ?
            <MyPage
              user={user}
              onLogout={onLogout}
              onSubscribe={onSubscribe}
            />
            :
            <Redirect to='/login'/>
          }
        </Route>
        <Redirect to='/'/>
      </Switch>
    </ThemeProvider>
  );
};

App.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  error: PropTypes.object,
  user: PropTypes.object,
};

export default App;
