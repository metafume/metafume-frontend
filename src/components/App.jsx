import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainContainer from '../containers/MainContainer';
import ProductPage from './ProductPage';

const App = ({ product }) => {
  return (
    <Switch>
      <Route exact path='/'>
        <MainContainer />
      </Route>
      <Route path='/product/:brand/:id'>
        <ProductPage product={product}/>
      </Route>
      <Redirect to='/'/>
    </Switch>
  );
};

App.propTypes = {
  product: PropTypes.object,
};

export default App;
