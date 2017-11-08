import React from 'react';
import ReactDOM from 'react-dom';
import ActionItem from './index';
import * as actions from '../../utils/actions';

it('should show paper action item for the user', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionItem action={actions.DEFINITION.paper} />, div);
});

it('should show rock action item for the user', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionItem action={actions.DEFINITION.rock} />, div);
});

it('should show scissors action item for the user', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionItem action={actions.DEFINITION.scissors} />, div);
});