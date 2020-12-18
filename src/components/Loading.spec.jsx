import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './Loading';

describe('<Loading />', () => {
  afterEach(cleanup);

  it('renders loading', () => {
    const { getByText } = render(<Loading />);
    expect(getByText(/Loading/)).toBeInTheDocument();
  });

  it('shows the props correctly', () => {
    const ERROR_MESSAGE = 'Network Error';
    const { getByText } = render(<Loading>{ERROR_MESSAGE}</Loading>);
    expect(getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });
});
