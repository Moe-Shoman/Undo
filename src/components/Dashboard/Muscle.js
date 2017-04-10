import React from 'react';
import { connect } from 'react-redux';
import { selectExercise } from '../../actions/index.js';

function mapStateToProps(state) {
  return {
    exercise: state.selectedExercise
  }
}

const Muscle = ({ match, exercise }) => {
  console.log(exercise)
  return (
    <div>ID: {match.params.muscle_type}</div>
  )
};

export default Muscle
