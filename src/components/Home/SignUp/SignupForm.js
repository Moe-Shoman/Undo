import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SubmitButton from '../SubmitButton';
class LoginForm extends Component {
    render() {
        return (
            <div>
                <TextField hintText="First Name" floatingLabelText="First Name" errorText="This field is required"/><br/>
                <TextField hintText="Last Name" floatingLabelText="Last Name" errorText="This field is required"/><br/>
                <TextField hintText="Email" floatingLabelText="Email" errorText="This field is required"/><br/>
                <TextField hintText="Password" floatingLabelText="Password" errorText="This field is required" type="password"/><br/>
                <TextField hintText="Weight" floatingLabelText="Weight" errorText="This field is required" type="number"/><br/>
                <SubmitButton/>
            </div>
        );
    }
};

export default LoginForm;
