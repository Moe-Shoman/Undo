import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};
class SubmitButton extends Component {
  render() {
    return (
      <RaisedButton label="SUBMIT" secondary={true} style={style} />
    );
  }
}

export default SubmitButton;
