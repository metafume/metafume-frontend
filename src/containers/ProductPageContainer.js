import { connect } from 'react-redux';

import ProductPage from '../components/ProductPage';

import api from '../utils/api';
import { addFavorite, deleteFavorite } from '../reducers/user';
import { getToken } from '../utils/helpers';

const mapStateToProps = state => ({
  user: state.user?.profile,
});

const mapDispatchToProps = dispatch => {
  return {
    onAdd: async (userId, productId) => {
      const token = getToken();
      const { product } = await api.addFavorite(userId, productId, token);
      dispatch(addFavorite(product));
    },
    onDelete: async (userId, productId) => {
      const token = getToken();
      await api.deleteFavorite(userId, productId, token);
      dispatch(deleteFavorite(productId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
