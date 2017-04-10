import { combineReducers } from 'redux';
import selectedExerciseReducer from './reducer_selectedExercise';
import listReducer from './reducer_exercises';
import selectedMuscleReducer from './reducer_selectedMuscle';

const rootReducer = combineReducers({
  selectedExercise: selectedExerciseReducer,
  list: listReducer,
  selectedMuscle: selectedMuscleReducer
});

export default rootReducer;
