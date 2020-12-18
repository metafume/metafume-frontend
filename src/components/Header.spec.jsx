import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '../setupTests';
import Header from './Header';

describe('<Header />', () => {
  const LOGO = 'Metafume';

  afterEach(cleanup);

  it('renders header', () => {
    const { getByText } = renderWithRouter(<Header />);
    expect(getByText(LOGO)).toBeInTheDocument();
  });

  it('renders header with user name', async () => {
    const userName = 'userName';
    const { getByText } = renderWithRouter(<Header userName={userName}/>);

    expect(getByText(LOGO)).toBeInTheDocument();
    expect(getByText(/userName/)).toBeInTheDocument();
  });
});
