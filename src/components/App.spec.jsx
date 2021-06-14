import { renderWithWrappers as render, withRedux, withRouter } from '../setupTests';
import { fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  const MAIN_TEXT = 'Visualizing your fragrances by color.';
  const props = {
    onLoad: () => {},
    onLogin: () => {},
    onLogout: () => {},
    onSubscribe: () => {},
  };

  it('renders application properly', async () => {
    const { getByText } = render([withRedux, withRouter])(<App {...props} />);

    await waitFor(() => {
      expect(getByText(MAIN_TEXT)).toBeInTheDocument();
    });

    fireEvent.click(getByText('My Page'));
    await waitFor(() => {
      expect(getByText('Login')).toBeInTheDocument();
    });

    fireEvent.click(getByText('Metafume'));
    expect(getByText(MAIN_TEXT)).toBeInTheDocument();
  });
});
