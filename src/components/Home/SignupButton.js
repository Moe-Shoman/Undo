import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
class SignupButton extends Component {
  render() {
    return (
      <RaisedButton label="SIGNUP" secondary={true} style={style} />
    );
  }
}

export default SignupButton;
