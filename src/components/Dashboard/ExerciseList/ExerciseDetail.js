import React from 'react';
import { connect } from 'react-redux';
import './ExerciseDetail.css';

const mapStateToProps = (state) => {
  return {
    query: state.query,
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
              <h3 className='video-title'>
                Description:
              </h3>
              {this.props.selectedVideo.snippet.description}
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

}

export default connect(mapStateToProps)(ExerciseDetail);
