import axios from 'axios';


function getAllExercises() {
  const apiUrl = 'http://paolitaclo-routinegenerator.herokuapp.com/api/exercises';
  return axios
    .get(apiUrl)
    .then(response => response.data)
}

export const selectExercise = (selectedExercise) => {
  return {
    type: 'EXERCISE_SELECTED',
    selectedExercise
  }
}

export const doSearch = () => {
  return {
    type: 'DO_SEARCH',
    payload: getAllExercises()
  }
}

export const setMuscle = (selectedMuscle) => {
  return {
    type: 'MUSCLE_SELECTED',
    selectedMuscle
  }
}
