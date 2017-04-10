import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSearch, setMuscle } from '../../actions';

function mapStateToProps(state) {
  return {
    list: state.list,
    selectedMuscle: state.selectedMuscle
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSearch, setMuscle }, dispatch)
}

const Muscle = ({ match, list, selectedMuscle }) => {
  if (list.length === 0) {
    // doSearch().then((response) => response)
    list.push(doSearch())
  }
  console.log("The exercise in Muscle: ", list)
  console.log("The selected muscle in MUSCLE: ", setMuscle(match.params.muscle_type))
  // console.log("The selected exercise is: ", match.params.muscle_type)
  return (
    <div>ID: {match.params.muscle_type}</div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Muscle);
