const loggedIn = (state = {loggedIn: false} , action) => {
  console.log('action.type', action.type, 'action.payload', action.payload);
  switch(action.type) {
    // case '@@redux-form/SET_SUBMIT_SUCCEEDED':
    //   console.log('submitted', 'action.payload',action.payload);
    //   return action.payload
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
