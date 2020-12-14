import { connect } from 'react-redux';

import api from '../utils/api';
import * as actions from '../reducers/user';
import { getToken } from '../utils/helpers';

import ProductPage from '../components/ProductPage';

const mapStateToProps = state => ({
  user: state.user?.profile,
});

const mapDispatchToProps = dispatch => ({
  onAdd: async (userId, productId) => {
    const token = getToken();
    const { product } = await api.addFavorite(userId, productId, token);
    dispatch(actions.addFavorite(product));
  },
  onDelete: async (userId, productId) => {
    const token = getToken();
    await api.deleteFavorite(userId, productId, token);
    dispatch(actions.deleteFavorite(productId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
