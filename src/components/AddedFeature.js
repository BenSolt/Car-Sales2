import React from 'react';

//import action
import {removeItem} from '../actions'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeItem(props.remove)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default  connect(null, {removeItem}) (AddedFeature);
