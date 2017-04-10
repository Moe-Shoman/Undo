import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Muscle from './Muscle';
const style = {
  margin: 12,
};

const MuscleGroups = ({ match }) => {
  return (
    // Think about making <li> and just make it clickable
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/routines/chest'>
              <RaisedButton backgroundColor='#C0C0C0' labelColor='#000000' label="Chest" style={style} />
            </Link>
          </li>
          <li>
            <Link to='/routines/shoulders'>
              <RaisedButton backgroundColor='#C0C0C0' labelColor='#000000' label="Shoulders" style={style} />
            </Link>
          </li>
          <li>
            <Link to='/routines/back'>
              <RaisedButton backgroundColor='#C0C0C0' labelColor='#000000' label="Back" style={style} />
            </Link>
          </li>
          <li>
            <Link to='/routines/legs'>
              <RaisedButton backgroundColor='#C0C0C0' labelColor='#000000' label="Legs" style={style} />
            </Link>
          </li>
          <li>
            <Link to='/routines/triceps'>
              <RaisedButton backgroundColor='#C0C0C0' labelColor='#000000' label="Triceps" style={style} />
            </Link>
          </li>
          <li>
            <Link to='/routines/biceps-forearms'>
              <RaisedButton backgroundColor='#C0C0C0' labelColor='#000000' label="Biceps/Forearms" style={style} />
            </Link>
          </li>
        </ul>

        <Route path='/routines/:muscle_type' component={Muscle}/>
        <Route exact path='/routines' render={() => (
          <h3>Please pick a muscle group!</h3>
        )}/>
      </div>
    </Router>
  )
};

export default MuscleGroups;
