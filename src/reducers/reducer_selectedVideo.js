import initialState from './initialState';

const selectedVideo = (state = initialState.selectedVideo, action) => {
  switch(action.type) {
    case 'ACTIVE_VIDEO':
      return action.payload;
    default:
      return state;
  }
}

export default selectedVideo;
