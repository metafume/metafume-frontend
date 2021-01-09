import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

export const renderWithWrappers = (wrappers = []) => component =>
[ ...wrappers, render].reduce((component, wrapper) => wrapper(component), component);

export const withRouter = component => (<Router>{component}</Router>);
export const withRedux = component => (<Provider store={store}>{component}</Provider>);

export const renderWithRouter = component => renderWithWrappers([withRouter])(component);
export const renderWithRedux = component => renderWithWrappers([withRedux])(component);
