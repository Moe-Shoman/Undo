import axios from 'axios';

const loginRequest = (props) => {
  const url = 'http://paolitaclo-routinegenerator.herokuapp.com/api/token';
  return axios.post(url, props).then(res => {
    console.log('res.data', res.data);
    return res.data;
  }
)
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
      return response.data.filter((exercise) => {
        if (exercise.muscle.name === inputMuscle) {
          return exercise
        }
      })
    })
}

function getRoutineVideos(query) {
  query = query.charAt(0).toLowerCase() + query.slice(1)
  const apiUrl = `http://paolitaclo-routinegenerator.herokuapp.com/api/routines?muscleGroup=${query}`;
  return axios
    .get(apiUrl)
    .then((response) => {
      let array = [];
      for (let i = 4; i < response.length; i++) {
        array.push(response[i].url)
      }
      return array
    })
}

export const selectExercise = (selectedExercise) => {
  return {
    type: 'EXERCISE_SELECTED',
    selectedExercise
  }
}

export const doSearch = (selectedMuscle) => {
  return {
    type: 'DO_SEARCH',
    payload: getAllExercises(selectedMuscle)
  }
}

export const setMuscle = (selectedMuscle) => {
  return {
    type: 'MUSCLE_SELECTED',
    payload: selectedMuscle
  }
}

export const selectVideo = (selectedVideo) => {
  return {
    type: 'ACTIVE_VIDEO',
    payload: selectedVideo
  }
}

export const findVideos = (query) => {
  return {
    type: 'VIDEO_SEARCH',
    payload: getRoutineVideos(query)
  }
}

// export const showVideoList = (videoList) => {
//   return {
//     type: 'VIDEO_LIST',
//     payload: get
//   }
// }
