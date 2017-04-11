import React, {Component} from 'react';
import SubmitButton from '../SubmitButton';
import {Field, reduxForm} from 'redux-form';
import {TextField} from 'redux-form-material-ui';
class SignupForm extends Component {
    submit = (values) => {
        console.log('values', values);
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <Field component={TextField} name="First Name" hintText="First Name" floatingLabelText="First Name" errorText="This field is required"/><br/>
                <Field component={TextField} name="Last Name" hintText="Last Name" floatingLabelText="Last Name" errorText="This field is required"/><br/>
                <Field component={TextField} name="Email" hintText="Email" floatingLabelText="Email" errorText="This field is required"/><br/>
                <Field component={TextField} name="Password" hintText="Password" floatingLabelText="Password" errorText="This field is required" type="password"/><br/>
                <Field component={TextField} name="Weight" hintText="Weight" floatingLabelText="Weight" errorText="This field is required" type="number"/><br/>
                <SubmitButton/>
            </form>
        );
    }
};

export default reduxForm({form: 'SignupForm'})(SignupForm);
