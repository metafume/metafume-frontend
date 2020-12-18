import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('<Loading />', () => {
  it('shows the props correctly', () => {
    const ERROR_MESSAGE = 'Network Error';
    const { getByText } = render(<Loading>{ERROR_MESSAGE}</Loading>);
    expect(getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });
});
