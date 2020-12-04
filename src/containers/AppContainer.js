import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
