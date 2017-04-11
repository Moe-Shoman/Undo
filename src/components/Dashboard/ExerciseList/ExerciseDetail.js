import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    query: state.query,
    selectedExercise: state.selectedExercise,
    selectedVideo: state.selectedVideo
  }
}

class ExerciseDetail extends React.Component {
  render() {
    console.log("exercise in exercise detail: ", this.props.selectedExercise)
    console.log("selected video props: ", this.props.selectedVideo)
    if (this.props.selectedVideo) {
      const videoId = this.props.selectedVideo.id.videoId;
      const url = `https://www.youtube.com/embed/${videoId}`;
      return (
        <div className='col-md-8'>
          <div className='embed-responsive embed-responsive-16by9'>
            <iframe className='embed-responsive-item' src={url}></iframe>
          </div>
          <div className='details'>
            <div>{this.props.selectedVideo.snippet.title}</div>
            <div>{this.props.selectedVideo.snippet.description}</div>
          </div>
        </div>
      )
    } else {
      return null
    }
  }

}

export default connect(mapStateToProps)(ExerciseDetail);
