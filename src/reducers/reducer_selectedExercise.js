import initialState from './initialState';

const selectedExercise = (state = initialState.selectedExercise, action) => {
  switch(action.type) {
    case 'EXERCISE_SELECTED':
      return action.payload;
    default:
      return state;
  }
}

export default selectedExercise;
