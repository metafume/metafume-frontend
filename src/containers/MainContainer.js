import { connect } from 'react-redux';

import Main from '../components/Main';

import { addSearchList, deleteSearchList } from '../actions/actionCreator';
import api from '../utils/api';

const mapStateToProps = state => ({
  searchList: state.searchList,
});

const mapDispatchToProps = dispatch => {
  return {
    onSearch: async keyword => {
      const list = await api.searchKeyword(keyword);
      console.log('list:', list);
      dispatch(addSearchList(list));
    },
    onResetSearch: () => {
      dispatch(deleteSearchList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
