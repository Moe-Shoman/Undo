import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SignupForm from './SignupForm';
import './SignupPage.css';

export default class SignupPage extends Component {
    render() {
        return (
            <div className='Signup-div'>
                <MuiThemeProvider>
                    <SignupForm />
                </MuiThemeProvider>
            </div>
        );
    }
}
