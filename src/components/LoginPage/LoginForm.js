import React, {Component} from 'react';
import { TextField } from 'redux-form-material-ui';
import {Field, reduxForm} from 'redux-form';
import SubmitButton from '../Home/SubmitButton';
import { login } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

function mapStateToProps(state) {
  return {
    loggedIn: false
  }
}


class LoginForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.login)}>
                <Field component={TextField} name="email" hintText="Email" floatingLabelText="Email" errorText="This field is required" /><br/>
                <Field component={TextField} name="password" hintText="Password" floatingLabelText="Password" errorText="This field is required" type="password" /><br/>
                <SubmitButton/>
            </form>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'LoginForm',
})(LoginForm))
