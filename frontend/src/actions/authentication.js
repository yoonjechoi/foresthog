import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP,
  AUTH_SIGNUP_FAILURE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_TOGGLE_ACTION,
} from "./ActionTypes";

import axios from 'axios';


/* Sign up */

export function signup() {
  return {
    type: AUTH_SIGNUP
  };
}

export function signupSuccess() {
  return {
    type: AUTH_SIGNUP_SUCCESS
  };
}

export function signupFailure(error) {
  return {
    type: AUTH_SIGNUP_FAILURE,
    error,
  };
}

export function signupRequest(email, username, password) {
  return (dispatch) => {
    dispatch(signup());

    const data = {
      email,
      username,
      password
    };

    return axios.post('/accounts/signup/', data)
      .then((response) => {
        dispatch(signupSuccess());
      })
      .catch((error) => {
        dispatch(signupFailure(error));
      });
  };
}


/* toggle auth action( between login and signup) */

export function toggleAction() {
  return {
    type: AUTH_TOGGLE_ACTION,
  };
}


/* Login */
export function login() {
  return {
    type: AUTH_LOGIN,
  };
}

export function loginSuccess(username, accessToken) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    username,
    accessToken,
  };
}

export function loginFailure(error) {
  return {
    type: AUTH_LOGIN_FAILURE,
    error: error,
  };
}

export function loginRequest(username, password) {
  return (dispatch) => {
    dispatch(login());

    const data = {
      client_id: process.env.REACT_APP_OAUTH_CLIENT_ID,
      client_secret: process.env.REACT_APP_OAUTH_CLIENT_SECRET,
      grant_type: "password",
      username,
      password
    };

    axios.post('/auth/token', data)
      .then((response) => {
        const issuedAt = Date.now();
        const authData = {
          issuedAt,
          username,
          accessToken:response.data.access_token,
          refreshToken: response.data.refresh_token,
          expiresIn: response.data.expires_in,
          tokenType: response.data.token_type,
          scope: response.data.scope,
        }

        localStorage.setItem('authData', authData);
        localStorage.setItem('accessToken', authData.accessToken);
        dispatch(loginSuccess(username));
      })
  };
}
