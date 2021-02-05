import { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './styles/theme';
import { getToken, deleteToken } from '../utils/helpers';

import GlobalStyle from './styles/GlobalStyle';
import FloatingButton from './FloatingButton';
import Header from './Header';
import Loading from './Loading';
import CenterWrapper from './CenterWrapper';

const MainContainer = lazy(() => import('../containers/MainContainer'));
const ProductPageContainer = lazy(() => import('../containers/ProductPageContainer'));
const MyPage = lazy(() => import('./MyPage'));
const Login = lazy(() => import('./Login'));

const App = ({
  onLoad,
  onLogin,
  onLogout,
  onSubscribe,
  user,
  loading,
  error,
}) => {
  const history = useHistory();

  useEffect(() => {
    onLoad(getToken());
  }, []);

  useEffect(() => {
    if (!error) return;
    if (getToken()) deleteToken();
  }, [error]);

  const handleOnClickMyPage = () => {
    if (user) history.push(`/mypage/${user._id}`);
    else history.push('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header userName={user?.name}/>
      <FloatingButton onClick={handleOnClickMyPage}>
        My Page
      </FloatingButton>
      <Suspense fallback={<CenterWrapper><Loading /></CenterWrapper>}>
      <Switch>
        <Route exact path='/'>
          <MainContainer />
        </Route>
        <Route path='/product/:brand/:id'>
          <ProductPageContainer />
        </Route>
        <Route path='/login'>
          {
            user ?
            <Redirect to='/'/>
            :
            <Login onLogin={onLogin} loading={loading} error={error}/>
          }
        </Route>
        <Route path='/mypage/:id'>
          {
            user ?
            <MyPage
              user={user}
              onLogout={onLogout}
              onSubscribe={onSubscribe}
            />
            :
            <Redirect to='/login'/>
          }
        </Route>
        <Redirect to='/'/>
      </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

App.propTypes = {
  onLoad: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    isSubscribed: PropTypes.bool.isRequired,
    myFavorite: PropTypes.arrayOf(PropTypes.shape({
      _id: PropTypes.string.isRequired,
      productId: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default App;
