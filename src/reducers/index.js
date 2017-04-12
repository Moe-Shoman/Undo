import { combineReducers } from 'redux';
import selectedExerciseReducer from './reducer_selectedExercise';
import listReducer from './reducer_exercises';
import { reducer as formReducer } from 'redux-form';
import loggedInReducer from './reducer_login';
import activeVideoReducer from './reducer_selectedVideo';
import signedInReducer from './reducer_signUp';

const rootReducer = combineReducers({
  selectedExercise: selectedExerciseReducer,
  list: listReducer,
  form: formReducer,
  loggedIn: loggedInReducer,
  selectedVideo: activeVideoReducer,
  signedIn: signedInReducer
});

export default rootReducer;
