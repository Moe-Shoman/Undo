import { combineReducers } from 'redux';
import selectedExerciseReducer from './reducer_selectedExercise';
import listReducer from './reducer_exercises';
import selectedMuscleReducer from './reducer_selectedMuscle';
import { reducer as formReducer } from 'redux-form';
import loggedInReducer from './reducer_login';
const rootReducer = combineReducers({
  selectedExercise: selectedExerciseReducer,
  list: listReducer,
  selectedMuscle: selectedMuscleReducer,
  form: formReducer,
  loggedIn: loggedInReducer
});

export default rootReducer;
