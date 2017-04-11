import axios from 'axios';

export const login = (props) => {
  console.log('login props', props);
  const loginRequest = axios.post('http://paolitaclo-routinegenerator.herokuapp.com/api/token', props)
    .then((res) => {
      console.log('res.data', res.data);
      return res.data
    });
  return {
    type: 'LOGIN',
    payload: loginRequest
  }
}
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
