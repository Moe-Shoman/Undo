import React from 'react';
import { connect } from 'react-redux';
import './ExerciseDetail.css';

const mapStateToProps = (state) => {
  return {
    selectedExercise: state.selectedExercise,
    selectedVideo: state.selectedVideo
  }
}

class ExerciseDetail extends React.Component {
  render() {
    if (this.props.selectedVideo) {
      const videoId = this.props.selectedVideo.id.videoId;
      const url = `https://www.youtube.com/embed/${videoId}`;
      return (
        <div className='col-md-8'>
          <div>
            <h2 className='video-title'>
              {this.props.selectedExercise.name}
            </h2>
            <p className='video-description'>
              Equipment: {this.props.selectedExercise.equipment.name} &nbsp;
              Type of exercise: {this.props.selectedExercise.type.name}
            </p>
          </div>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='embed-responsive-item' src={url}></iframe>
          </div>
          <div className='video-infopane'>
            <div>
              <h1 className='video-title'>
                {this.props.selectedVideo.snippet.title}
              </h1>
            </div>
            <div className='video-description'>
              Description: <br />
              {this.props.selectedVideo.snippet.description}
            </div>
          </div>
        </div>
      )
    } else {
      // The state hasn't been set yet.
      return null
    }
  }

}

export default connect(mapStateToProps)(ExerciseDetail);
