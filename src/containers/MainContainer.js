import { connect } from 'react-redux';

import * as actions from '../reducers/searchList';

import Main from '../components/Main';

const mapStateToProps = state => ({
  searchList: state.searchList.list,
  loading: state.searchList.loading,
  error: state.searchList.error?.message,
});

const mapDispatchToProps = dispatch => ({
  onSearch: keyword => {
    dispatch(actions.addSearchListStart(keyword));
  },
  onResetSearch: () => {
    dispatch(actions.deleteSearchList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
