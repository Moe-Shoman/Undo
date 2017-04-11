import React, {Component} from 'react';
import { TextField } from 'redux-form-material-ui';
import {Field, reduxForm} from 'redux-form';
import SubmitButton from '../SubmitButton';
import { login } from '../../../actions/index';
import { bindActionCreators } from 'redux';
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}


class LoginForm extends Component {
    // submit = (values) => {
    //   console.log('values', values);
    //     login(values);
    // }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(login)}>
                <Field component={TextField} name="email" hintText="Email" floatingLabelText="Email" errorText="This field is required" /><br/>
                <Field component={TextField} name="password" hintText="Password" floatingLabelText="Password" errorText="This field is required" type="password" /><br/>
                <SubmitButton/>
            </form>
        );
    }
};

export default reduxForm({form: 'LoginForm'})(LoginForm)
