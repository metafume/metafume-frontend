import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Login from './Login';

describe('<Login />', () => {
  const GOOGLE_LOGIN = 'Login with Google';

  afterEach(cleanup);

  it('renders Login', () => {
    const { getByText } = render(<Login onLogin={() => {}}/>);

    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText(GOOGLE_LOGIN)).toBeInTheDocument();
  });

  it('should work click event correctly', () => {
    const onLogin = jest.fn();
    const { getByText } = render(<Login onLogin={onLogin}/>);

    fireEvent.click(getByText(GOOGLE_LOGIN));
    fireEvent.click(getByText(GOOGLE_LOGIN));
    fireEvent.click(getByText(GOOGLE_LOGIN));

    expect(onLogin).toBeCalledTimes(3);
  });
});
