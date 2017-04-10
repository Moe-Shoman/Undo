import { combineReducers } from 'redux';
import selectedExercise from './reducer_selectedExercise';

const rootReducer = combineReducers({
  selectedExercise: selectedExercise
});

export default rootReducer;
