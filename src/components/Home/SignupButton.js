import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
class SignupButton extends Component {
  render() {
    return (
      <RaisedButton label="SIGNUP" backgroundColor='#C0C0C0' labelColor='#000000' style={style} />
    );
  }
}

export default SignupButton;
