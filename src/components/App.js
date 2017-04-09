import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home.js';
import Dashboard from './Dashboard/Dashboard.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
    render() {
        return (
          <Router>
            <div className='page'>
              <ul>
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/routines'>Routines</Link></li>
              </ul>
            </div>

            <Route exact path='/' component={Home} />
            <Route path='/routines' component={Dashboard} />
          </Router>
            <div className="App">
                <Home />
                <Dashboard />
            </div>
        );
    }
}

export default App;
