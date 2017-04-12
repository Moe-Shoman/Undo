import initialState from './initialState';

const selectedVideo = (state = initialState.selectedVideo, action) => {
  switch(action.type) {
    case 'VIDEO_SELECTED':
      return action.payload;
    default:
      return state;
  }
}

export default selectedVideo;
