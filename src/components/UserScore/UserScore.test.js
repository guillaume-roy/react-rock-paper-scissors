import React from 'react';
import ReactDOM from 'react-dom';
import UserScore from './index';

it('should show score for the user', () => {
  const div = document.createElement('div');
  const scoreState = {
    total: 5,
    win: 3,
    lose: 1,
    tie: 1
  };
  ReactDOM.render(<UserScore total={scoreState.total} win={scoreState.win} lose={scoreState.lose} tie={scoreState.tie} />, div);
});