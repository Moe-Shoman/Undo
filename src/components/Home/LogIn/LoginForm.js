import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SubmitButton from '../SubmitButton';
class LoginForm extends Component {
    render() {
        return (
            <div>
                <TextField hintText="Email" floatingLabelText="Email" errorText="This field is required"/><br/>
                <TextField hintText="Password" floatingLabelText="Password" errorText="This field is required" type="password"/><br/>
                <SubmitButton/>
            </div>
        );
    }
};

export default LoginForm;
