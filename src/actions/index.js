import axios from 'axios';

const loginRequest = (props) => {
  const url = 'http://paolitaclo-routinegenerator.herokuapp.com/api/token';
  return axios.post(url, props).then(res => {
    console.log('res.data', res.data);
    return res.data;
  })
}

export const login = (props) => {
  // console.log('login props', props);
  // const loginRequest = axios.post(, props)
  //   .then((res) => {
  //      res.data
  //   });
  return {
    type: 'LOGIN',
    payload: loginRequest(props)
  }
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
