import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home.js';
import Dashboard from './Dashboard/Dashboard.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
    render() {
        return (
            <div className="App">
                <Home />
                <Dashboard />
            </div>
        );
    }
}

export default App;
