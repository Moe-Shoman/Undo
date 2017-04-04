import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SignupButton from './SignupButton.js';
import LoginButton from './LoginButton.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ŪNDO</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload. Killa Kev
                </p>
                <MuiThemeProvider>
                    <SignupButton/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <LoginButton/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
