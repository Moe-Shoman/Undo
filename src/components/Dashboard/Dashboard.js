import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuscleGroups from './MuscleGroups.js';
import Muscle from './Muscle.js'


export default class Dashboard extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider>
                    <MuscleGroups />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <Muscle />
                </MuiThemeProvider>
            </div>
        );
    }
}
