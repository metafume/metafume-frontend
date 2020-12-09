import { connect } from 'react-redux';

import Main from '../components/Main';

import { addSearchListStart, deleteSearchList } from '../reducers/searchList';

const mapStateToProps = state => ({
  searchList: state.searchList.list,
  loading: state.searchList.loading,
  error: state.searchList.error?.message,
});

const mapDispatchToProps = dispatch => {
  return {
    onSearch: keyword => {
      dispatch(addSearchListStart(keyword));
    },
    onResetSearch: () => {
      dispatch(deleteSearchList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
