import { connect } from 'react-redux';

import App from '../components/App';

import { loginStart, logout } from '../reducers/user';
import { deleteToken, getToken } from '../utils/helpers';

const mapStateToProps = state => ({
  user: state.user?.profile,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    const token = getToken();
    if (token) dispatch(loginStart(token));
  },
  onLogin: () => {
    dispatch(loginStart());
  },
  onLogout: () => {
    dispatch(logout());
    deleteToken();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
