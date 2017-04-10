import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
class LoginButton extends Component {
  render() {
    return (
      <RaisedButton label="LOGIN" backgroundColor='#C0C0C0' labelColor='#008b8b' style={style} />
    );
  }
}

export default LoginButton;
