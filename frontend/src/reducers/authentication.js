import {
  AUTH_LOGIN,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP,
  AUTH_SIGNUP_FAILURE,
  AUTH_SIGNUP_SUCCESS,
  AUTH_TOGGLE_ACTION
} from 'actions/ActionTypes';
import {Map} from 'immutable';

const initialState = Map({
  isLoggedIn: localStorage.getItem('accessToken') ? true : false,
  access_token: localStorage.getItem('accessToken'),
  username: localStorage.getItem('username'),

  action: 'login',

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

    case AUTH_TOGGLE_ACTION:
      const toggleMap = {login: 'signup', signup: 'login'}
      const nextAction = toggleMap[state.get('action')]
      return state.set('action', nextAction);

    case AUTH_LOGIN_SUCCESS:
      const {username, accessToken} = action;
      return state.set('username', username)
        .set('accessToken', accessToken)
        .set('isLoggedIn', true);

    default:
      return state;
  }
}
