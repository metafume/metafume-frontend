import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './styles/theme';

import MainContainer from '../containers/MainContainer';
import GlobalStyle from './styles/GlobalSyle';
import Header from './Header';
import Login from './Login';
import MyPage from './MyPage';
import ProductPage from './ProductPage';
import FloatingButton from './FloatingButton';

const App = ({ onLoad, onLogin, user }) => {
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (user) history.push('/');
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header userName={user?.name} />
      <FloatingButton user={user} />
      <Switch>
        <Route exact path='/'>
          <MainContainer />
        </Route>
        <Route path='/product/:brand/:id'>
          <ProductPage />
        </Route>
        <Route path='/login'>
          <Login onLogin={onLogin} />
        </Route>
        <Route path='/mypage/:id'>
          {user ? <MyPage user={user} /> : <Redirect to='/login'/>}
        </Route>
        <Redirect to='/'/>
      </Switch>
    </ThemeProvider>
  );
};

App.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onLoad: PropTypes.func.isRequired,
  user: PropTypes.object,
};

export default App;
