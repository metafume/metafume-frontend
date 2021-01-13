import { render, fireEvent, cleanup } from '@testing-library/react';
import FloatingButton from './FloatingButton';

describe('<FloatingButton />', () => {
  afterEach(cleanup);

  it('shows the props correctly', () => {
    const { getByText } = render(<FloatingButton onClick={() => {}}>red</FloatingButton>);
    expect(getByText('red')).toBeInTheDocument();
  });

  it('should work click event correctly', () => {
    const onClick = jest.fn();
    const { getByText } = render(<FloatingButton onClick={onClick}>red</FloatingButton>);

    fireEvent.click(getByText('red'));
    fireEvent.click(getByText('red'));
    fireEvent.click(getByText('red'));

    expect(onClick).toBeCalledTimes(3);
  });
});
