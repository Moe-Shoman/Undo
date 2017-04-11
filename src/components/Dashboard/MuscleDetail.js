import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSearch, setMuscle, findVideos, selectVideo } from '../../actions';

function mapStateToProps(state) {
  return {
    list: state.list,
    selectedMuscle: state.selectedMuscle,
    selectedVideo: state.selectedVideo,
    query: state.query
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSearch, setMuscle, findVideos, selectVideo }, dispatch)
}

class MuscleDetail extends React.Component {
  renderList() {
    return this.props.list.map((exercise) => {
      return (
        <li
          key={exercise.id}
          onClick={() => {
            this.props.setMuscle(exercise);
            this.props.findVideos(this.props.match.params.muscle_type)
          }}>
          {exercise.name}
        </li>
      )
    })
  }

  renderVideo() {
    return (
      <div>
        <iframe src={'https://www.youtube.com/embed/XP3dfC7SmSE'}></iframe>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>
          {this.props.match.params.muscle_type}
        </h1>
        <ul>
          {this.renderList()}
        </ul>
        <div>
          {this.renderVideo()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MuscleDetail);
