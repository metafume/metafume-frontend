import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const searchKeyword = async keyword => {
  const result = await axios.get('/products/search', { params: { keyword } });

  console.log(result);

  return result.data;
};

export default {
  searchKeyword,
};
