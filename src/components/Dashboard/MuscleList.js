import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import MuscleDetail from './MuscleDetail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doSearch, setMuscle } from '../../actions';
const style = {
  margin: 12,
};

function mapStateToProps(state) {
  return {
    list: state.list,
    selectedMuscle: state.selectedMuscle
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ doSearch, setMuscle }, dispatch)
}

class MuscleList extends React.Component{
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/routines/Chest'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Chest');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Chest" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Shoulders'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Shoulders');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Shoulders" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Traps'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Traps');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Traps" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Quadriceps'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Quadriceps');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Quadriceps" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Triceps'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Triceps');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Triceps" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Lats'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Lats');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Lats" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Abdominals'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Abdominals');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Abdominals" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Abductors'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Abductors');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Abductors" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Lower-Back'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Lower Back');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Lower Back" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Adductors'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Adductors');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Adductors" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Middle-Back'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Middle Back');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Middle Back" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Biceps'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Biceps');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Biceps" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Neck'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Neck');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Neck" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Calves'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Calves');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Calves" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Forearms'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Forearms');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Forearms" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Glutes'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Glutes');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Glutes" style={style} />
              </Link>
            </li>
            <li>
              <Link to='/routines/Hamstrings'>
                <RaisedButton onClick={(event) => {
                  this.props.doSearch('Hamstrings');
                }} backgroundColor='#C0C0C0' labelColor='#000000' label="Hamstrings" style={style} />
              </Link>
            </li>
          </ul>

          <Route path='/routines/:muscle_type' component={MuscleDetail}/>
          <Route exact path='/routines' render={() => (
            <h3>Please pick a muscle group!</h3>
          )}/>
        </div>
      </Router>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MuscleList);
