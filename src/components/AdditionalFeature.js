import React from 'react';

import { connect } from 'react-redux';
//import action
import {addItem} from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
      onClick={() => props.addItem(props.remove)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default  connect(null, {addItem}) (AdditionalFeature)
