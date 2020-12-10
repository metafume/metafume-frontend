import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './styles/theme';

import MainContainer from '../containers/MainContainer';
import ProductPageContainer from '../containers/ProductPageContainer';
import GlobalStyle from './styles/GlobalSyle';
import FloatingButton from './FloatingButton';
import Header from './Header';
import Login from './Login';
import MyPage from './MyPage';

const App = ({ onLoad, onLogin, onLogout, user }) => {
  useEffect(() => {
    onLoad();
  }, []);

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
          <ProductPageContainer />
        </Route>
        <Route path='/login'>
          {user ? <Redirect to='/'/> : <Login onLogin={onLogin} />}
        </Route>
        <Route path='/mypage/:id'>
          {user ? <MyPage user={user} onLogout={onLogout}/> : <Redirect to='/login'/>}
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
  user: PropTypes.object,
};

export default App;
