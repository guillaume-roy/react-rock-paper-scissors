import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//https://github.com/alexmngn/react-rock-paper-scissors/blob/master/src/scenes/Game/index.spec.js
//https://github.com/cichys/rock-paper-scissors/blob/master/app/components/__tests__/Game.spec.js