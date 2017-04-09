import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Route } from 'react-router-dom';
import { Muscle } from './Muscle';
const style = {
  margin: 12,
};

export const MuscleGroups = ({ match }) => {
  return (
    // Think about making <li> and just make it clickable
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/chest`}>
            <RaisedButton backgroundColor='grey' labelColor='black' label="Chest" secondary={true} style={style} />
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/shoulders`}>
            <RaisedButton backgroundColor='grey' labelColor='black' label="Shoulders" secondary={true} style={style} />
          </Link>
        </li>
      </ul>
      <RaisedButton backgroundColor='grey' labelColor='black' label="Back" secondary={true} style={style} />
      <RaisedButton backgroundColor='grey' labelColor='black' label="Legs" secondary={true} style={style} />
      <RaisedButton backgroundColor='grey' labelColor='black' label="Triceps" secondary={true} style={style} />
      <RaisedButton backgroundColor='grey' labelColor='black' label="Biceps/Forearms" secondary={true} style={style} />

      <Route path={`{match.url}/:topicId`} component={Muscle}/>
      <Route exact path={match.url} render={() => (
        <h3>Please pick a muscle group!</h3>
      )}/>
    </div>
  )
}
