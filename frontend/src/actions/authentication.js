import {
  AUTH_SIGNUP,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAILURE,
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
    type:AUTH_SIGNUP_FAILURE,
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

export function loginRequest(username, password) {

}
