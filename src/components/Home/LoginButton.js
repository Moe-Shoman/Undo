import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
class LoginButton extends Component {
  render() {
    return (
      <RaisedButton label="LOGIN" secondary={true} style={style} />
    );
  }
}

export default LoginButton;
