import React from 'react';
import ReactDOM from 'react-dom';
import LastResult from './index';
import * as actions from '../../utils/actions';

it('should show last result for the user', () => {
  const div = document.createElement('div');
  const lastResultState = {
    playerAction: actions.DEFINITION.paper,
    computerAction: actions.DEFINITION.rock,
    lastResult: 'win'
  };
  ReactDOM.render(<LastResult playerAction={lastResultState.playerAction} computerAction={lastResultState.computerAction} lastResult={lastResultState.lastResult} />, div);
});