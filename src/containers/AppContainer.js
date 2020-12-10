import { connect } from 'react-redux';

import App from '../components/App';

import { loginStart } from '../reducers/user';
import { getCookie } from '../utils/helpers';


const mapStateToProps = state => ({
  user: state.user?.profile,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => {
    const token = getCookie();
    if (token) dispatch(loginStart(token));
  },
  onLogin: () => {
    dispatch(loginStart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
