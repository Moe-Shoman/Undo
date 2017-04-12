import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import  LoginPage from '../LoginPage/LoginPage';
const style = {
    margin: 12
};
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class LoginButton extends Component {
    render() {
        return (
          <Link to='/login'>
            <RaisedButton label="LOGIN" backgroundColor='#C0C0C0' labelColor='#008b8b' style={style}/>
          </Link>
        );
    }
}

export default LoginButton;
