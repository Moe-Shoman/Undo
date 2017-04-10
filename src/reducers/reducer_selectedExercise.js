import initialState from './initialState';

export default function(state = initialState.selectedExercise, action) => {
  switch(action.type) {
    case 'EXERCISE_SELECTED':
      return action.payload;
  }
  
  return state
}
