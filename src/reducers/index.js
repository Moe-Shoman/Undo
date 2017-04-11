import { combineReducers } from 'redux';
import selectedExerciseReducer from './reducer_selectedExercise';
import listReducer from './reducer_exercises';
import selectedMuscleReducer from './reducer_selectedMuscle';
import selectedVideoReducer from './reducer_selectedVideo';
import queryReducer from './reducer_query';
import { reducer as formReducer } from 'redux-form';
import loggedInReducer from './reducer_login';

const rootReducer = combineReducers({
  selectedExercise: selectedExerciseReducer,
  list: listReducer,
  selectedMuscle: selectedMuscleReducer,
  selectedVideo: selectedVideoReducer,
  query: queryReducer,
  form: formReducer,
  loggedIn: loggedInReducer
});

export default rootReducer;
