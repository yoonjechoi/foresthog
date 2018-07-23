const initialState = {
  isLoggedIn: 'access_token' in localStorage,
  access_token: localStorage.getItem('access_token'),
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function usernameLogin(username, password) {
  return dispatch => {

  }
}

function createAccount(username, password, email, name) {
  return dispatch => {

  }
}


const actionCreators = {
  usernameLogin,
  createAccount,
};

export {actionCreators};

export default reducer;
