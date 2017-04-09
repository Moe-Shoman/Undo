import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 12,
};

export default class MuscleGroups extends Component {
  render() {
    return (
      // Think about making <li> and just make it clickable
      <div>
        <RaisedButton backgroundColor='grey' labelColor='black' label="Chest" secondary={true} style={style} />
        <RaisedButton backgroundColor='grey' labelColor='black' label="Shoulders" secondary={true} style={style} />
        <RaisedButton backgroundColor='grey' labelColor='black' label="Back" secondary={true} style={style} />
        <RaisedButton backgroundColor='grey' labelColor='black' label="Legs" secondary={true} style={style} />
        <RaisedButton backgroundColor='grey' labelColor='black' label="Triceps" secondary={true} style={style} />
        <RaisedButton backgroundColor='grey' labelColor='black' label="Biceps/Forearms" secondary={true} style={style} />
      </div>
    )
  }
}
