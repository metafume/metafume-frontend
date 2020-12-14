import axios from 'axios';
import firebase from './firebase';
import { setToken } from './helpers';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const searchKeyword = async keyword => {
  const result = await axios.get('/products/search', { params: { keyword } });
  return result.data;
};

const getProductDetail = async path => {
  const result = await axios.get('/products/detail', { params: { id: path } });
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

const addFavorite = async (userId, productId, token) => {
  const result = await axios.post(`/users/${userId}/favorite/${productId}`, null, {
    headers: { 'x-access-token': token } },
  );
  return result.data;
};

const deleteFavorite = async (userId, productId, token) => {
  const result = await axios.delete(`/users/${userId}/favorite/${productId}`, {
    headers: { 'x-access-token': token } },
  );
  return result.data;
};

const getRecommendList = async (userId, token) => {
  const result = await axios.get(`/users/${userId}/favorite/recommend`, {
    headers: { 'x-access-token': token } });
  return result.data;
};

const subscribeMail = async (userId, token, option) => {
  const result = await axios.put(`/users/${userId}/subscribe`, { option }, {
    headers: { 'x-access-token': token } });
  return result.data;
};

export default {
  searchKeyword,
  getProductDetail,
  getRecentViewList,
  googleLogin,
  tokenLogin,
  addFavorite,
  deleteFavorite,
  getRecommendList,
  subscribeMail,
};
