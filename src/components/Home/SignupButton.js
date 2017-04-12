import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
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
