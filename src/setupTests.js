import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

export const renderWithRouter = component => render(<Router>{component}</Router>);
