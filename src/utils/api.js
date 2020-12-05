import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const searchKeyword = async keyword => {
  const result = await axios.get('/products/search', { params: { keyword } });
  return result.data;
};

const getProductDetail = async id => {
  const result = await axios.get('/products/detail', { params: { id } });
  return result.data;
};

export default {
  searchKeyword,
  getProductDetail,
};
