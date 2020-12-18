import React from 'react';
import { renderWithRouter } from '../setupTests';
import ProductList from './ProductList';

describe('<ProductList />', () => {
  const PRODUCT = {
    productId: 'id-1',
    brand: 'metafume',
    name: 'metafume-salt',
    imageUrl: 'https://www.example.com',
  };

  const LIST = Array.from({ length: 10 }).map((_, idx) => {
    return {
      ...PRODUCT,
      productId: `id-${idx}`,
    };
  });

  it('renders list correctly', () => {
    const { container } = renderWithRouter(<ProductList list={LIST}/>);
    expect(container.querySelectorAll('a').length).toEqual(10);
  });
});
