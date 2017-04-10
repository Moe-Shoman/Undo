import React from 'react';

const Muscle = ({ match }) => (
  <div>
    <h3>ID: {match.params.muscle_type}</h3>
  </div>
);

export default Muscle
