import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuscleGroups from './MuscleGroups.js';


export default class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <MuscleGroups />
                </MuiThemeProvider>
            </div>
        );
    }
}
