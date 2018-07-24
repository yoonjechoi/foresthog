import {AUTH_SIGNUP, AUTH_SIGNUP_FAILURE, AUTH_SIGNUP_SUCCESS} from 'actions/ActionTypes';
import {Map, List} from 'immutable';

const initialState = Map({
  isLoggedIn: 'access_token' in localStorage,
  access_token: localStorage.getItem('access_token'),

  login: Map({
    status: 'INIT'
  }),

  register: Map({
    status: 'INIT',
    error: -1,
  }),

});

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTH_SIGNUP:
      return state.setIn(['register', 'status'], 'WAITING')
                  .setIn(['register', 'error'], -1);

    case AUTH_SIGNUP_SUCCESS:
      return state.setIn(['register', 'status'], 'SUCCESS');

    case AUTH_SIGNUP_FAILURE:
      return state.setIn(['register', 'status'], 'FAILURE')
                  .setIn(['register', 'error'], Map(action.error));

    default:
      return state;
  }
}
