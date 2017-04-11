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
              <ul className='navbar-ul'>
                <li className='navbar-li'><Link to='/' className='navbar-Link'>Login</Link></li>
                <li className='navbar-li'><Link to='/routines' className='navbar-Link'>Routines</Link></li>
              </ul>

              <Route exact path='/' component={Home} />
              <Route path='/routines' component={Dashboard} />
            </div>
          </Router>
        );
    }
}

export default App;
