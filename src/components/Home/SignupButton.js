import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import  SignupPage  from '../SignupPage/SignupPage';
const style = {
    margin: 12
};
class SignupButton extends Component {
    render() {
        return (
                    <Link to="/signup">
                        <RaisedButton label="SIGNUP" backgroundColor='#C0C0C0' labelColor='#000000' style={style}/>
                    </Link>
        );
    }
}

export default SignupButton;
