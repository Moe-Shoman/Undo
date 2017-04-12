import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignupForm from './SignupForm';

export default class SignupPage extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <SignupForm />
                </MuiThemeProvider>
            </div>
        );
    }
}
