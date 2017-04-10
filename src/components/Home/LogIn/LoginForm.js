import React, {Component} from 'react';
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
// import SubmitButton from '../SubmitButton';
class LoginForm extends Component {
    render() {
        return (
            <form>
                <Field  component={TextField} hintText="Email" floatingLabelText="Email" errorText="This field is required"/><br/>
                <Field  component={TextField} hintText="Password" floatingLabelText="Password" errorText="This field is required" type="password"/><br/>
                {/* <SubmitButton/> */}
            </form>
        );
    }
};
// LoginForm = reduxForm({
//   form: 'LoginForm'
// })(LoginForm)
export default reduxForm({
  form: 'LoginForm'
})(LoginForm)
