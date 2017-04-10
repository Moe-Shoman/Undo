import { combineReducers } from 'redux';
import selectedExercise from './reducer_selectedExercise';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  selectedExercise: selectedExercise,
});

export default rootReducer;
