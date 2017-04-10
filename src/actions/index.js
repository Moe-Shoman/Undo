import axios from 'axios';


const getExercisesByMuscleType = () => {
  // GET request to Epiclands /exercises brehhh
  const apiUrl = 'http://paolitaclo-routinegenerator.herokuapp.com/api/exercises'
  return axios.get(apiUrl)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch(error => console.log(error))
}

export const selectExercise = (exercise) => {
  return {
    type: 'EXERCISE_SELECTED',
    payload: getExercisesByMuscleType(exercise)
  }
}
