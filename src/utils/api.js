import axios from 'axios';
import firebase from './firebase';
import { setToken } from './helpers';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const searchKeyword = async keyword => {
  const result = await axios.get('/products/search', { params: { keyword } });
  return result.data;
};

const getProductDetail = async id => {
  const result = await axios.get('/products/detail', { params: { id } });
  return result.data;
};

const getRecentViewList = async url => {
  const result = await axios.get(url);
  return result.data;
};

const googleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const { user } = await firebase.auth().signInWithPopup(provider);

  const userInfo = {
    email: user.email,
    name: user.displayName,
    photoUrl: user.photoURL,
  };

  const { data } = await axios.post('/users/login/google', userInfo);

  setToken(data.token);

  return data.user;
};

const tokenLogin = async token => {
  const { data } = await axios.post('/users/login/token', { token });
  return data.user;
};

export default {
  searchKeyword,
  getProductDetail,
  getRecentViewList,
  googleLogin,
  tokenLogin,
};
