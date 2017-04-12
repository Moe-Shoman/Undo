const signedIn = (state = {signedUp: false} , action) => {
  switch(action.type) {
    case 'SIGNUP_PENDING':
    console.log('peending');
      return state;
    case 'SIGNUP_FULFILLED':
    console.log('fulfilled');
    console.log(action, state);
      return action.payload;
    case 'SIGNUP_REJECTED':
      console.log('rejected');
      return action.payload;
    default:
      return state;
  }
}

export default signedIn;
