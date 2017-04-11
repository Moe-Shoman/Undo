import initialState from './initialState';

const selectedMuscle = (state = initialState.selectedMuscle, action) => {
  switch(action.type) {
    case 'MUSCLE_SELECTED':
      return action.payload;
    default:
      return state;
  }
}

export default selectedMuscle;
