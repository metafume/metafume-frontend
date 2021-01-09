import React from 'react';
import { renderWithRouter } from '../setupTests';
import Main from './Main';

describe('<Main />', () => {
  const MAIN_TEXT = 'Visualizing your fragrances by color.';
  const props = {
    onSearch: () => {},
    onResetSearch: () => {},
    loading: false,
  };

  it('renders main page', () => {
    const { getByText } = renderWithRouter(<Main {...props}/>);
    expect(getByText(MAIN_TEXT)).toBeInTheDocument();
    expect(getByText('Find')).toBeInTheDocument();
  });
});
