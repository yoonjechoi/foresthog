const initialState = {
  isLoggedIn: 'access_token' in localStorage,
  access_token: localStorage.getItem('access_token'),
};

export default function authentication(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
