import axios from 'axios';

const loginRequest = (props) => {
  const url = 'http://paolitaclo-routinegenerator.herokuapp.com/api/token';
  return axios.post(url, props)
}

const signUpRequest = (props) => {
  const url = 'http://paolitaclo-routinegenerator.herokuapp.com/api/users';
  return axios.post(url, props).then((res) => {
    return res.data;
  })
}

function getAllExercises(inputMuscle) {
  const apiUrl = 'http://paolitaclo-routinegenerator.herokuapp.com/api/exercises';
  return axios
  .get(apiUrl)
  .then((response) => {
    inputMuscle.split('-').join(" ")
    let array = response.data.filter((exercise) => {
      if (exercise.muscle.name === inputMuscle) {
        return exercise
      }
    })
    return array
  })
}


/********************************** ACTION CREATORS ************************************/
export const signUp = (props) => {
  return {
    type: 'SIGNUP',
    payload: signUpRequest(props)
  }
}

export const login = (props) => {
  return {
    type: 'LOGIN',
    payload: loginRequest(props)
  }
}

export const selectExercise = (selectedExercise) => {
  return {
    type: 'EXERCISE_SELECTED',
    payload: selectedExercise
  }
}

export const doSearch = (selectedMuscle) => {
  return {
    type: 'DO_SEARCH',
    payload: getAllExercises(selectedMuscle)
  }
}

export const selectVideo = (selectedVideo) => {
  return {
    type: 'VIDEO_SELECTED',
    payload: selectedVideo
  }
}
