import React, {Component} from 'react';
import logo from '../../images/muscle.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';
class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ŪNDO</h2>
                </div>
                <p className="App-intro">
                  <h3>
                    Ūndo provides users the ability to:
                  </h3>
                    <ul>
                      <li>find exercises based on muscle group</li>
                      <li>set up fitness routines</li>
                      <li>track their fitness goals</li>
                      <li>watch exercise videos</li>
                    </ul>

                </p>
                <MuiThemeProvider>
                    <LoginButton/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <SignupButton/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Home;
