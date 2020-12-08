import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './styles/theme';

import MainContainer from '../containers/MainContainer';
import ProductPage from './ProductPage';
import GlobalStyle from './styles/GlobalSyle';

const App = ({ product }) => {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <MainContainer />
        </Route>
        <Route path='/product/:brand/:id'>
          <ProductPage product={product}/>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </ThemeProvider>
  );
};

App.propTypes = {
  product: PropTypes.object,
};

export default App;
