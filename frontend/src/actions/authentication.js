import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP,
  AUTH_SIGNUP_FAILURE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_TOGGLE_ACTION,
  AUTH_WHO_AM_I,
  AUTH_WHO_AM_I_FAILURE,
  AUTH_WHO_AM_I_SUCCESS,
} from "./ActionTypes";

import axios from 'axios';

export const KEY_AUTH_DATA = 'authData';
export const KEY_ACCESS_TOKEN = 'accessToken';
export const KEY_USERNAME = 'username';


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
          accessToken: response.data.access_token,
          refreshToken: response.data.refresh_token,
          expiresIn: response.data.expires_in,
          tokenType: response.data.token_type,
          scope: response.data.scope,
        };

        localStorage.setItem(KEY_AUTH_DATA, btoa(JSON.stringify(authData)));
        localStorage.setItem(KEY_ACCESS_TOKEN, authData.accessToken);
        localStorage.setItem(KEY_USERNAME, authData.username);

        dispatch(loginSuccess(username, authData.accessToken));
      })
  };
}


/* who am i */
export function whoAmI() {
  return {
    type: AUTH_WHO_AM_I,
  };
}

export function whoAmISuccess(username, accessToken) {
  return {
    type: AUTH_WHO_AM_I_SUCCESS,
    username,
    accessToken,
  }
}

export function whoAmIFailure(error) {
  return {
    type: AUTH_WHO_AM_I_FAILURE,
    error,
  }
}

export function whoAmIRequest() {
  return (dispatch) => {
    dispatch(whoAmI());

    if (!(KEY_AUTH_DATA in localStorage)) {
      dispatch(whoAmIFailure({msg: 'No auth data'}));
      return Promise.reject();
    }

    let authData = JSON.parse(atob(localStorage.getItem(KEY_AUTH_DATA)));

    const expiredAt = authData.issuedAt + authData.expiresIn * 1000;
    if (Date.now() > expiredAt) {
      // token is expired. need to refresh token
      const {refreshToken} = authData;
      // return dispatch(refreshTokenRequest(refreshToken))
      //   .then(() => {
      //
      //   });

    } else {
      const headers = {
        Authorization: `${authData.tokenType} ${authData.accessToken}`,
      };

      return axios.post('/accounts/whoami/', undefined, {headers})
        .then((response) => {
          const {username} = response.data;

          localStorage.setItem(KEY_ACCESS_TOKEN, authData.accessToken);
          localStorage.setItem(KEY_USERNAME, username);

          if (authData.username !== username) {
            authData.username = username;
            localStorage.setItem(KEY_AUTH_DATA, btoa(JSON.stringify(authData)));
          }

          dispatch(whoAmISuccess(username));
        })
        .catch((error) => {
          localStorage.removeItem(KEY_AUTH_DATA);
          localStorage.removeItem(KEY_ACCESS_TOKEN);
          localStorage.removeItem(KEY_USERNAME);

          dispatch(whoAmIFailure(error));
        });
    }

  };
}
