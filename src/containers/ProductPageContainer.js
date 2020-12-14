import { connect } from 'react-redux';

import api from '../utils/api';
import * as actions from '../reducers/user';

import ProductPage from '../components/ProductPage';

const mapStateToProps = state => ({
  user: state.user?.profile,
});

const mapDispatchToProps = dispatch => ({
  onAdd: async (userId, productId) => {
    const { product } = await api.addFavorite(userId, productId);
    dispatch(actions.addFavorite(product));
  },
  onDelete: async (userId, productId) => {
    await api.deleteFavorite(userId, productId);
    dispatch(actions.deleteFavorite(productId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
