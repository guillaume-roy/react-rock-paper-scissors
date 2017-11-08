import React from 'react';
import ReactDOM from 'react-dom';
import ActionsList from './index';
import * as actions from '../../utils/actions';

it('should show actions for the user', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionsList actions={actions} />, div);
});