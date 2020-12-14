import { connect } from 'react-redux';

import api from '../utils/api';
import * as actions from '../reducers/user';
import { deleteToken, getToken } from '../utils/helpers';

import App from '../components/App';

const mapStateToProps = state => ({
  user: state.user?.profile,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    const token = getToken();
    if (token) dispatch(actions.loginStart(token));
  },
  onLogin: () => {
    dispatch(actions.loginStart());
  },
  onLogout: () => {
    dispatch(actions.logout());
    deleteToken();
  },
  onSubscribe: async (userId, option) => {
    const token = getToken();
    await api.subscribeMail(userId, token, option);
    dispatch(actions.updateSubscription(option));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
