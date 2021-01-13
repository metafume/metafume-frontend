import { renderWithRouter } from '../setupTests';
import Product from './Product';

describe('<Product />', () => {
  const PRODUCT = {
    productId: 'id-1',
    brand: 'metafume',
    name: 'metafume-salt',
    imageUrl: 'https://www.example.com',
  };

  it('renders product', () => {
    const { getByText, container } = renderWithRouter(<Product product={PRODUCT}/>);
    const link = container.querySelector('a');
    const img = container.querySelector('img');

    expect(getByText(PRODUCT.name)).toBeInTheDocument();
    expect(getByText(PRODUCT.brand)).toBeInTheDocument();
    expect(link.getAttribute('href')).toEqual(`/product/${PRODUCT.brand}/${PRODUCT.productId}`);
    expect(img.getAttribute('src')).toEqual(PRODUCT.imageUrl);
  });
});
