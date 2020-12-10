import { createSlice } from '@reduxjs/toolkit';

const LOGIN_USER_START = 'LOGIN_USER_START';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
const LOGOUT_USER = 'LOGOUT_USER';

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const reducers = {
  [LOGIN_USER_START]: {
    reducer: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    prepare: token => ({ payload: { token } }),
  },
  [LOGIN_USER_SUCCESS]: {
    reducer: (state, action) => ({
      ...state,
      profile: action.payload.user,
      loading: false,
      error: null,
    }),
    prepare: user => ({ payload: { user }}),
  },
  [LOGIN_USER_FAILURE]: {
    reducer: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    prepare: error => ({ payload: { error }}),
  },
  [LOGOUT_USER]: {
    reducer: state => ({ ...state, profile: null }),
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export const loginStart = userSlice.actions[LOGIN_USER_START];
export const loginSuccess = userSlice.actions[LOGIN_USER_SUCCESS];
export const loginFailure = userSlice.actions[LOGIN_USER_FAILURE];
export const logout = userSlice.actions[LOGOUT_USER];

export default userSlice.reducer;
