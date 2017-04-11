import initialState from './initialState';

const query = (state = initialState.query, action) => {
  switch(action.type) {
    case 'VIDEO_SEARCH_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default query;
