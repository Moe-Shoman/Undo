import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuscleList from './MuscleList.js';


export default class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <MuscleList />
                </MuiThemeProvider>
            </div>
        );
    }
}
