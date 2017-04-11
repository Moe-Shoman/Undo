import React from 'react';
const API_KEY = 'AIzaSyCrxiigo6F9QTGpaCHddhUty9PO8wbG4Fg';
import YTSearch from 'youtube-api-search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSearch, selectExercise, selectVideo } from '../../../actions';
import ExerciseDetail from './ExerciseDetail';
import './ExerciseList.css';

function mapStateToProps(state) {
  return {
    list: state.list,
    selectedExercise: state.selectedExercise,
    selectedVideo: state.selectedVideo
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSearch, selectExercise, selectVideo }, dispatch)
}

class ExerciseList extends React.Component {
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.props.selectVideo(videos[0])
    })
  }

  renderList() {
    return this.props.list.map((exercise) => {
      return (
        <li
          key={exercise.id}
          className="ExerciseList-listitem"
          onClick={() => {
            this.props.selectExercise(exercise);
            if (exercise) {
              this.videoSearch(exercise.name);
            }
          }}>
          {exercise.name}
        </li>
      )
    })
  }


  renderVideo() {
    return (
      <div>
        <ExerciseDetail />
      </div>
    )
  }

  render() {
    return (
      <div className='col-md-12'>
        <h1 className='float'>
          {this.props.match.params.muscle_type}
        </h1>
        <ul className="ExerciseList-list col-md-4 list-group">
          {this.renderList()}
        </ul>
        <div>
          {this.renderVideo()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
