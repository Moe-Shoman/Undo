import { combineReducers } from 'redux';
import selectedExerciseReducer from './reducer_selectedExercise';
import listReducer from './reducer_exercises';
import queryReducer from './reducer_query';
import { reducer as formReducer } from 'redux-form';
import loggedInReducer from './reducer_login';
import activeVideoReducer from './reducer_selectedVideo';

const rootReducer = combineReducers({
  selectedExercise: selectedExerciseReducer,
  list: listReducer,
  query: queryReducer,
  form: formReducer,
  loggedIn: loggedInReducer,
  selectedVideo: activeVideoReducer
});

export default rootReducer;
