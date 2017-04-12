import React, {Component} from 'react';
import SubmitButton from '../Home/SubmitButton';
import {Field, reduxForm} from 'redux-form';
import {TextField, SelectField} from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import { signUp } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signUp }, dispatch)
}

function mapStateToProps(state) {
  return {
    signedUp: false
  }
}

class SignupForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.signUp)}>
                <Field component={TextField} name="first_name" hintText="First Name" floatingLabelText="First Name" errorText="This field is required"/><br/>
                <Field component={TextField} name="last_name" hintText="Last Name" floatingLabelText="Last Name" errorText="This field is required"/><br/>
                <Field component={TextField} name="email" hintText="Email" floatingLabelText="Email" errorText="This field is required"/><br/>
                <Field component={TextField} name="password" hintText="Password" floatingLabelText="Password" errorText="This field is required" type="password"/><br/>
                <Field component={TextField} name="weight" hintText="Weight" floatingLabelText="Weight" errorText="This field is required" type="number" parse={(value, name) => parseInt(value, 10)}/><br/>
                <Field component={SelectField} name="user_intentions" floatingLabelText="Fitness Goals">
                    <MenuItem value="Lose Weight" primaryText="Lose Weight"/>
                    <MenuItem value="Gain Muscle" primaryText="Gain Muscle"/>
                    <MenuItem value="Maintain" primaryText="Maintain"></MenuItem>
                </Field>
                <br/>
                <SubmitButton/>
            </form>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'SignupForm',
})(SignupForm))
