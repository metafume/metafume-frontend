import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '../setupTests';
import Logo from './Logo';

describe('<Logo />', () => {
  const LOGO = 'Metafume';

  afterEach(cleanup);

  it('renders logo', () => {
    const { getByText } = renderWithRouter(<Logo />);
    expect(getByText(LOGO)).toBeInTheDocument();
  });

  it('shows the props correctly', () => {
    const { getByText } = renderWithRouter(<Logo size={42} />);
    expect(getByText(LOGO).getAttribute('size')).toEqual('42');
  });
});
