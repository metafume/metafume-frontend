import { renderWithRouter } from '../setupTests';
import MyPage from './MyPage';

describe('<MyPage />', () => {
  const props = {
    onLogout: () => {},
    onSubscribe: () => {},
    user: {
      _id: '123',
      name: 'Ethan',
      email: 'example@mail.com',
      photoUrl: 'https://example.com',
      isSubscribed: false,
      myFavorite: [],
    },
  };

  it('renders my page with the user', () => {
    const { getByText } = renderWithRouter(<MyPage {...props} />);
    expect(getByText(props.user.name)).toBeInTheDocument();
    expect(getByText(props.user.email)).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();
    expect(getByText('Subscribe')).toBeInTheDocument();
    expect(getByText('My favorites')).toBeInTheDocument();
  });
});
