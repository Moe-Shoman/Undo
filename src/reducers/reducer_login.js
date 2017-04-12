const loggedIn = (state = {loggedIn: false} , action) => {
  switch(action.type) {
    case 'LOGIN_PENDING':
    console.log('peending');
      return state;
    case 'LOGIN_FULFILLED':
    console.log('fulfilled');
    console.log('action', action, 'state', state);
      return action.payload.data;
    case 'LOGIN_REJECTED':
      console.log('rejected', 'action', action);
      return action.payload;
    default:
      return state;
  }
}

export default loggedIn;
