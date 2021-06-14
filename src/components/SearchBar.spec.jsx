import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../setupTests';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  afterEach(cleanup);

  it('renders search bar', () => {
    const { container, getByText } = renderWithRouter(
      <SearchBar onSearch={() => {}} onResetSearch={() => {}} />,
    );

    const input = container.querySelector('input');
    const findButton = getByText('Find');

    expect(input).toBeInTheDocument();
    expect(findButton).toBeInTheDocument();
  });

  it('should work input and button corretly', () => {
    const onSearch = jest.fn();
    const onResetSearch = jest.fn();
    const { container, getByText } = renderWithRouter(
      <SearchBar onSearch={onSearch} onResetSearch={onResetSearch} />,
    );

    const input = container.querySelector('input');
    const findButton = getByText('Find');

    fireEvent.click(findButton);
    fireEvent.click(findButton);
    fireEvent.click(findButton);

    expect(onSearch).toBeCalledTimes(0);
    expect(onResetSearch).toBeCalledTimes(0);

    fireEvent.change(input, { target: { value: 'le-labo' } });
    fireEvent.click(findButton);

    expect(onSearch).toBeCalledTimes(1);
    expect(onResetSearch).toBeCalledTimes(1);

    fireEvent.change(input, { target: { value: '' } });
    expect(onResetSearch).toBeCalledTimes(2);
  });
});
