const loggedIn = (state = {loggedIn: false} , action) => {
  console.log('action', action);
  switch(action.type) {
    case 'LOGIN_PENDING':
    console.log('peending');
      return action.payload;
    case 'LOGIN_FULFILLED':
    console.log('fulfilled');
      return action.payload;
    case 'LOGIN_REJECTED':
      console.log('rejected');
      return action.payload
    default:
      return state;
  }
}

export default loggedIn;
