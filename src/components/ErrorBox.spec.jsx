import { render, cleanup } from '@testing-library/react';
import { renderWithRouter } from '../setupTests';
import ErrorBox from './ErrorBox';

describe('<ErrorBox />', () => {
  afterEach(cleanup);

  it('shows the props correctly', () => {
    const ERROR_MESSAGE = 'error message';
    const { getByText } = render(<ErrorBox message={ERROR_MESSAGE}/>);
    expect(getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  it('shows back button', () => {
    const { getByText } = renderWithRouter(<ErrorBox message='error message' back/>);
    expect(getByText('Back')).toBeInTheDocument();
  });
});

