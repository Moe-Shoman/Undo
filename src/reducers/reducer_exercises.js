import initialState from './initialState';

const list = (state = initialState.list, action) => {
  switch(action.type) {
    case 'DO_SEARCH_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default list;
