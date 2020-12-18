import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  afterEach(cleanup);

  it('shows the props correctly', () => {
    const whiteButton = render(<Button onClick={() => {}}>white</Button>);
    const blackButton = render(<Button onClick={() => {}}>black</Button>);

    expect(whiteButton.getByText('white')).toBeInTheDocument();
    expect(blackButton.getByText('black')).toBeInTheDocument();
  });

  it('should work click event correctly', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>black</Button>);

    fireEvent.click(getByText('black'));
    fireEvent.click(getByText('black'));

    expect(onClick).toBeCalledTimes(2);

    fireEvent.click(getByText('black'));
    fireEvent.click(getByText('black'));

    expect(onClick).toBeCalledTimes(4);
  });
});
